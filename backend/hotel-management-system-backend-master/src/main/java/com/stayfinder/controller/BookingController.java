package com.stayfinder.controller;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.stayfinder.dto.BookingDetailDto;
import com.stayfinder.dto.BookingDto;
import com.stayfinder.dto.CommanApiResponse;
import com.stayfinder.dto.UpdateBookingStatusRequestDto;
import com.stayfinder.entity.Booking;
import com.stayfinder.entity.Hotel;
import com.stayfinder.entity.User;
import com.stayfinder.exception.BookingNotFoundException;
import com.stayfinder.service.BookingService;
import com.stayfinder.service.HotelService;
import com.stayfinder.service.UserService;
import com.stayfinder.utility.Helper;
import com.stayfinder.utility.Constants.BookingStatus;
import com.stayfinder.utility.Constants.ResponseCode;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("api/book/hotel")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

	Logger LOG = LoggerFactory.getLogger(BookingController.class);

	@Autowired
	private BookingService bookingService;

	@Autowired
	private HotelService hotelService;

	@Autowired
	private UserService userService;
	
	@GetMapping("pay")
	public ResponseEntity<?> paymentGateway(@RequestParam("amount") String amount) {
	    try {
	        double a = Double.parseDouble(amount); 
	        RazorpayClient razorpayClient = new RazorpayClient("rzp_test_a45KRpKctXLv5n", "0bVTMZf6PyU7P2EpGLBGAwNf");
	        JSONObject options = new JSONObject();
	        options.put("amount", (int) (a * 100)); // Convert the float amount to integer cents
	        options.put("currency", "INR");
	        options.put("receipt", "txn_123456");
	        Order order = razorpayClient.Orders.create(options);
	        String orderId = order.get("id").toString();
	        JSONObject responseJson = new JSONObject();
	        responseJson.put("order_id", orderId);
	        return new ResponseEntity(responseJson.toString(), HttpStatus.OK);
	    } catch (Exception e) {
	        return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	@PostMapping("/")
	@ApiOperation(value = "Api to book hotel")
	public ResponseEntity<?> register(Booking booking) {
		LOG.info("Recieved request for booking hotel");

		System.out.println(booking);

		CommanApiResponse response = new CommanApiResponse();

		if (booking == null) {
//			response.setResponseCode(ResponseCode.FAILED.value());
//			response.setResponseMessage("Hotel Booking Failed");
//			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
			
			throw new BookingNotFoundException();
		}

		if (booking.getUserId() == 0) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("User is not not looged in");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		if (booking.getHotelId() == 0) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Hotel not found to Book");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		Hotel hotel = hotelService.fetchHotel(booking.getHotelId());

		if (hotel == null) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("No Hotel present with this Id");
		}

		booking.setStatus(BookingStatus.PENDING.value());

		booking.setBookingId(Helper.getAlphaNumericId());

		Booking bookedHotel = this.bookingService.bookHotel(booking);

		if (bookedHotel != null) {
			response.setResponseCode(ResponseCode.SUCCESS.value());
			response.setResponseMessage(
					"Hotel Booked Added Successfully, Please Check Approval Status on Booking Option");
			return new ResponseEntity(response, HttpStatus.OK);
		}

		else {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to Book Hotel");
			return new ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/fetch/all")
	@ApiOperation(value = "Api to fetch all booked hotel for Admin")
	public ResponseEntity<?> fetchAllHotelBooking() {
		LOG.info("Recieved request for fetch all booking");

		BookingDetailDto response = new BookingDetailDto();

		List<BookingDto> bookings = new ArrayList<>();

		List<Booking> allBookings = this.bookingService.getAllBookings();

		for (Booking booking : allBookings) {

			BookingDto dto = new BookingDto();

			dto.setBookingId(booking.getBookingId());
			dto.setCheckIn(booking.getCheckIn());
			dto.setCheckOut(booking.getCheckOut());

			User customer = this.userService.getUserById(booking.getUserId());
			dto.setCustomerName(customer.getFirstName() + " " + customer.getLastName());

			Hotel hotel = this.hotelService.fetchHotel(booking.getHotelId());
			User hotelUser = this.userService.getUserById(hotel.getUserId());
			dto.setHotelEmail(hotelUser.getEmailId());
			dto.setHotelContact(hotelUser.getContact());
			dto.setHotelId(hotel.getId());
			dto.setStatus(booking.getStatus());
			dto.setTotalDay(booking.getTotalDay());
			dto.setTotalRoom(booking.getTotalRoom());
			dto.setUserId(customer.getId());
			dto.setHotelName(hotel.getName());
			dto.setHotelImage(hotel.getImage1());
			dto.setCustomerContact(customer.getContact());
			dto.setTotalAmount(String.valueOf(hotel.getPricePerDay() * booking.getTotalRoom() * booking.getTotalDay()));
			dto.setId(booking.getId());

			bookings.add(dto);
		}

		response.setBookings(bookings);
		response.setResponseCode(ResponseCode.SUCCESS.value());
		response.setResponseMessage("Booking Fetched Successfully");
		return new ResponseEntity(response, HttpStatus.OK);

	}

	@GetMapping("/fetch")
	@ApiOperation(value = "Api to fetch customer booked hotel")
	public ResponseEntity<?> fetchMyBooking(@RequestParam("userId") int userId) {
		LOG.info("Recieved request for fetch all booking");

		BookingDetailDto response = new BookingDetailDto();

		List<BookingDto> bookings = new ArrayList<>();

		List<Booking> allBookings = this.bookingService.getMyBookings(userId);

		for (Booking booking : allBookings) {

			BookingDto dto = new BookingDto();

			dto.setBookingId(booking.getBookingId());
			dto.setCheckIn(booking.getCheckIn());
			dto.setCheckOut(booking.getCheckOut());

			User customer = this.userService.getUserById(booking.getUserId());
			dto.setCustomerName(customer.getFirstName() + " " + customer.getLastName());

			Hotel hotel = this.hotelService.fetchHotel(booking.getHotelId());
			User hotelUser = this.userService.getUserById(hotel.getUserId());
			dto.setHotelEmail(hotelUser.getEmailId());
			dto.setHotelContact(hotelUser.getContact());
			dto.setHotelId(hotel.getId());
			dto.setStatus(booking.getStatus());
			dto.setTotalDay(booking.getTotalDay());
			dto.setTotalRoom(booking.getTotalRoom());
			dto.setUserId(customer.getId());
			dto.setHotelName(hotel.getName());
			dto.setHotelImage(hotel.getImage1());
			dto.setCustomerContact(customer.getContact());
			dto.setTotalAmount(String.valueOf(hotel.getPricePerDay() * booking.getTotalRoom() * booking.getTotalDay()));
			dto.setId(booking.getId());

			bookings.add(dto);
		}

		response.setBookings(bookings);
		response.setResponseCode(ResponseCode.SUCCESS.value());
		response.setResponseMessage("Booking Fetched Successfully");
		return new ResponseEntity(response, HttpStatus.OK);

	}

	@GetMapping("/fetch/id")
	@ApiOperation(value = "Api to fetch booking by booking Id")
	public ResponseEntity<?> fetchBookingById(@RequestParam("bookingId") int bookingId) {
		LOG.info("Recieved request for fetch booking by Id");

		Booking booking = this.bookingService.getBookingById(bookingId);
		
		if(booking == null) {
			throw new BookingNotFoundException();
		}

		BookingDto dto = new BookingDto();

		dto.setBookingId(booking.getBookingId());
		dto.setCheckIn(booking.getCheckIn());
		dto.setCheckOut(booking.getCheckOut());

		User customer = this.userService.getUserById(booking.getUserId());
		dto.setCustomerName(customer.getFirstName() + " " + customer.getLastName());

		Hotel hotel = this.hotelService.fetchHotel(booking.getHotelId());
		User hotelUser = this.userService.getUserById(hotel.getUserId());
		dto.setHotelEmail(hotelUser.getEmailId());
		dto.setHotelContact(hotelUser.getContact());
		dto.setHotelId(hotel.getId());
		dto.setStatus(booking.getStatus());
		dto.setTotalDay(booking.getTotalDay());
		dto.setTotalRoom(booking.getTotalRoom());
		dto.setUserId(customer.getId());
		dto.setHotelName(hotel.getName());
		dto.setHotelImage(hotel.getImage1());
		dto.setCustomerContact(customer.getContact());
		dto.setTotalAmount(String.valueOf(hotel.getPricePerDay() * booking.getTotalRoom() * booking.getTotalDay()));
		dto.setId(booking.getId());

		return new ResponseEntity(dto, HttpStatus.OK);

	}

	@GetMapping("/fetch/bookings")
	@ApiOperation(value = "Api to fetch all hotel booking for Hotel Manager")
	public ResponseEntity<?> fetchMyHotelBooking(@RequestParam("hotelId") int hotelId) {
		LOG.info("Recieved request for fetch all booking");

		BookingDetailDto response = new BookingDetailDto();

		List<BookingDto> bookings = new ArrayList<>();

		List<Booking> allBookings = this.bookingService.getMyHotelBookings(hotelId);

		for (Booking booking : allBookings) {

			BookingDto dto = new BookingDto();

			dto.setBookingId(booking.getBookingId());
			dto.setCheckIn(booking.getCheckIn());
			dto.setCheckOut(booking.getCheckOut());

			User customer = this.userService.getUserById(booking.getUserId());
			dto.setCustomerName(customer.getFirstName() + " " + customer.getLastName());

			Hotel hotel = this.hotelService.fetchHotel(booking.getHotelId());
			User hotelUser = this.userService.getUserById(hotel.getUserId());
			dto.setHotelEmail(hotelUser.getEmailId());
			dto.setHotelContact(hotelUser.getContact());
			dto.setHotelId(hotel.getId());
			dto.setStatus(booking.getStatus());
			dto.setTotalDay(booking.getTotalDay());
			dto.setTotalRoom(booking.getTotalRoom());
			dto.setUserId(customer.getId());
			dto.setHotelName(hotel.getName());
			dto.setHotelImage(hotel.getImage1());
			dto.setCustomerContact(customer.getContact());
			dto.setTotalAmount(String.valueOf(hotel.getPricePerDay() * booking.getTotalRoom() * booking.getTotalDay()));
			dto.setId(booking.getId());

			bookings.add(dto);
		}

		response.setBookings(bookings);
		response.setResponseCode(ResponseCode.SUCCESS.value());
		response.setResponseMessage("Booking Fetched Successfully");
		return new ResponseEntity(response, HttpStatus.OK);

	}

	@GetMapping("/fetch/status")
	@ApiOperation(value = "Api to fetch all booking status")
	public ResponseEntity<?> fetchAllBookingStatus() {
		LOG.info("Recieved request for fetch all booking status");

		List<String> response = new ArrayList<>();

		for (BookingStatus status : BookingStatus.values()) {
			response.add(status.value());
		}

		return new ResponseEntity(response, HttpStatus.OK);

	}

	@PostMapping("/update/status")
	@ApiOperation(value = "Api to update the booking status")
	public ResponseEntity<?> updateHotelBookingStatus(@RequestBody UpdateBookingStatusRequestDto request) {

		LOG.info("Recieved request for updating the Hotel Booking Status");

		CommanApiResponse response = new CommanApiResponse();

		Booking b = this.bookingService.getBookingById(request.getBookingId());
		
		if(b == null) {
			throw new BookingNotFoundException();
		}

		if (request.getStatus().equals("") || request.getStatus() == null) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Booking Status can not be empty");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}
		
		b.setStatus(request.getStatus());
		this.bookingService.bookHotel(b);

		response.setResponseCode(ResponseCode.SUCCESS.value());
		response.setResponseMessage("Booking Status Updated");
		return new ResponseEntity(response, HttpStatus.OK);

	}

}
