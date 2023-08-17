import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import NotFound from "../page/PageNotFound";

const admin = JSON.parse(sessionStorage.getItem("active-admin"));

const App = () => {
  return admin ? <ViewAllBooking /> : <p><NotFound/></p>;
};

const ViewAllBooking = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    const getAllBooking = async () => {
      const allBooking = await retrieveAllBooking();
      if (allBooking) {
        setAllBookings(allBooking.bookings);
      }
    };

    getAllBooking();
  }, []);

  const retrieveAllBooking = async () => {
    const response = await axios.get(
      "http://localhost:8081/api/book/hotel/fetch/all"
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5"
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center">
          <h2>All Bookings</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered custom-bg-text">
                <tr>
                  <th scope="col">Hotel</th>
                  <th scope="col">Hotel Name</th>
                  <th scope="col">Hotel Email</th>
                  <th scope="col">Hotel Contact</th>
                  <th scope="col">Booking Id</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Customer Contact</th>
                  <th scope="col">Check In</th>
                  <th scope="col">Check Out</th>
                  <th scope="col">Total Room</th>
                  <th scope="col">Total Day</th>
                  <th scope="col">Booking Status</th>
                  <th scope="col">Total Payable Amount</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((booking) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={
                            "http://localhost:8081/api/hotel/" +
                            booking.hotelImage
                          }
                          class="img-fluid"
                          alt="product_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        {booking.hotelName}
                      </td>
                      <td>
                        {booking.hotelEmail}
                      </td>
                      <td>
                        {booking.hotelContact}
                      </td>
                      <td>
                        {booking.bookingId}
                      </td>
                      <td>
                        {booking.customerName}
                      </td>
                      <td>
                        {booking.customerContact}
                      </td>
                      <td>
                        {booking.checkIn}
                      </td>
                      <td>
                        {booking.checkOut}
                      </td>
                      <td>
                        {booking.totalRoom}
                      </td>

                      <td>
                        {booking.totalDay}
                      </td>
                      <td>
                        {booking.status}
                      </td>
                      <td>
                        {booking.totalAmount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;