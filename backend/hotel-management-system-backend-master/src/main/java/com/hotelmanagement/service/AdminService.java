package com.hotelmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelmanagement.dao.BookingDao;
import com.hotelmanagement.dao.HotelDao;
import com.hotelmanagement.dao.UserDao;

@Service
public class AdminService {
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private HotelDao hotelDao;
	
	@Autowired
	private BookingDao bookingDao;

	public int getCustomersCount( ) {
		return this.userDao.countByRole("Customer");
	}
	
	public int getHotelsCount() {
		return (int)this.hotelDao.count();
	}
	
	public Long getRevenue() {
		return this.bookingDao.calculateTotalRevenue();
	}
	
	public List<Object[]> getUsersCountforHotels() {
		return this.bookingDao.countUsersRegisteredPerHotel();
	}
}
