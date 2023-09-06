import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import Header from "./NavbarComponent/Header";
import HomePage from "./page/HomePage";
import AddLocation from "./LocationComponent/AddLocation";
import AddFacility from "./FacilityComponent/AddFacility";
import AddHotelForm from "./HotelComponent/AddHotelForm";
import UserRegister from "./UserComponent/UserRegister";
import Hotel from "./HotelComponent/Hotel";
import AddHotelFacilities from "./FacilityComponent/AddHotelFacilities";
import AddHotelReview from "./HotelReviewComponent/AddHotelReview";
import UserLoginForm from "./UserComponent/UserLoginForm";
import ViewAllBooking from "./BookingComponent/ViewAllBooking";
import ViewMyBooking from "./BookingComponent/ViewMyBooking";
import ViewMyHotelBookings from "./BookingComponent/ViewMyHotelBookings";
import VerifyBooking from "./BookingComponent/VerifyBooking";
// import ChatBot from 'react-simple-chatbot';
// import { Button, Icon, Segment } from 'semantic-ui-react';
import NotFound from "./page/PageNotFound";
import AdminDashboard from "./AdminDashboard";
import { useState } from "react";
import Gallery from "./page/Gallery";
import Footer from "./page/Footer";
import Facility from "./page/Facility";
import ListYourHotel from "./ListYourHotel";
import Chatbot from "./Chatbot";

function App() {

  // const steps = [
  //   {
  //     id: "Greet",
  //     message: "Hello, Welcome to our hotel management!",
  //     trigger: "Done",
  //   },
  //   {
  //     id: "Done",
  //     message: "Please enter your name!",
  //     trigger: "waiting1",
  //   },
  //   {
  //     id: "waiting1",
  //     user: true,
  //     trigger: "Name",
  //   },
  //   {
  //     id: "Name",
  //     message: "Hi {previousValue}, How can we assist you today?",
  //     trigger: "options",
  //   },
  //   {
  //     id: "options",
  //     options: [
  //       {
  //         value: "BookHotel",
  //         label: "Book a Hotel",
  //         trigger: "BookHotel",
  //       },
  //       {
  //         value: "Facilities",
  //         label: "Hotel Facilities",
  //         trigger: "Facilities",
  //       },
  //       {
  //         value: "ContactUs",
  //         label: "Contact Us",
  //         trigger: "ContactUs",
  //       },
  //     ],
  //   },
  //   {
  //     id: "BookHotel",
  //     message: "Sure, we can help you with hotel bookings. It is simple process Just click on book hotel enter your details, and Manager will check availability and verify your details, You can check your booking status on our Website !!",
  //   },
  //   {
  //     id: "Facilities",
  //     message: "Our hotels offer a range of facilities for your comfort. You can check details of facilities per hotel",
  //   },
  //   {
  //     id: "ContactUs",
  //     message: `If you have any questions or need assistance, feel free to reach out to us. You can see Contact Us in Header section`,
  //   },
  // ];
  
  // const [chatbotVisible, setChatbotVisible] = useState(true);
  // const toggleChatbot = () => {
  //   setChatbotVisible(!chatbotVisible);
  // };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/home/all/hotel/location" element={<HomePage />} />
        <Route
          path="/home/hotel/location/:locationId/:locationName"
          element={<HomePage />}
        />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="admin/add-location" element={<AddLocation />} />
        <Route path="admin/add-facility" element={<AddFacility />} />
        <Route path="admin/hotel/register" element={<AddHotelForm />} />
        <Route path="user/hotel/register" element={<UserRegister />} />
        <Route path="user/customer/register" element={<UserRegister />} />
        <Route path="user/admin/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/facility" element={<Facility/>}></Route>
        <Route
          path="/home/hotel/location/:locationId/:locationName"
          element={<HomePage />}
        />
        <Route
          path="hotel/:hotelId/add/facility"
          element={<AddHotelFacilities />}
        />
        <Route
          path="hotel/:hotelId/location/:locationId/add/review"
          element={<AddHotelReview />}
        />
        <Route
          path="/hotel/:hotelId/location/:locationId"
          element={<Hotel />}
        />
        <Route path="user/admin/booking/all" element={<ViewAllBooking />} />
        <Route path="user/hotel/bookings" element={<ViewMyBooking />} />
        <Route
          path="user/hotel/bookings/all"
          element={<ViewMyHotelBookings />}
        />
        <Route
          path="/hotel/verify/booking/:bookingId"
          element={<VerifyBooking />}
        />
        <Route path="/listyourhotel" element={<ListYourHotel/>}></Route>
        <Route path="/pagenotfound" element={<NotFound/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>
      {/* <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        {chatbotVisible && <ChatBot steps={steps} />}
        <Button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            // borderRadius: "50%",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            border: "none",
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={toggleChatbot}
        > Chat With Us
          <Icon name={chatbotVisible ? "minus" : "chat"} />
        </Button>
      </div> */}
      <Chatbot/>
      <Footer />
    </div>
  );
}

export default App;
