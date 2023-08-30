import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import useRazorpay from "react-razorpay";
import html2pdf from 'html2pdf.js';
import NotFound from "../page/PageNotFound";

let user = JSON.parse(localStorage.getItem("active-customer"));

const App = () => {
  return user ? (
    <ViewMyBooking />
  ) : (
    <p>
      <NotFound />
    </p>
  );
};

const ViewMyBooking = () => {
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
      "http://localhost:8081/api/book/hotel/fetch?userId=" + user.id
    );
    console.log(response.data);
    return response.data;
  };

  const generatePDF = async (order_id, amt) => {
    const { PDFViewer, Document, Page, Text } = require("@react-pdf/renderer");
  
    const pdfBlob = await new Promise(async (resolve) => { 
      const MyDocument = () => (
        <Document>
          <Page>
            <Text>Payment Details:</Text>
            <Text>Order ID: {order_id}</Text>
            <Text>Amount: {amt}</Text>
          </Page>
        </Document>
      );
  
      const pdfBlob = await PDFViewer.renderToBlob(<MyDocument />); 
      resolve(pdfBlob);
    });
  
    return pdfBlob;
  };
  
  const [Razorpay] = useRazorpay();  
  const paymentStart = async (amt) => {
    try {
      const order = await axios.get(`http://localhost:8081/api/book/hotel/pay?amount=${amt}`);
      const order_id = order.data.order_id;
      
      const generateAndDownloadPDF = async () => {
        const pdfElement = document.createElement("div");
        pdfElement.innerHTML = `
          <h2>Payment Details:</h2>
          <p>Order ID: ${order_id}</p>
          <p>Amount: ${amt}</p>
          <p>Show this payment receipt while check-in</p>
          <p></p>
          <p></p>
          <p>Thank You !</p>
        `;
        
        const pdfOptions = {
          margin: [10, 10],
          filename: "payment_receipt.pdf",
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
  
        await html2pdf().from(pdfElement).set(pdfOptions).save();
      };
  
      const options = {
        key: "rzp_test_a45KRpKctXLv5n",
        amount: amt * 100,
        currency: "INR",
        name: "Stay Finder",
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
          await generateAndDownloadPDF();
        },
      };
  
      const rzp1 = new Razorpay(options);
  
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
  
      rzp1.open();
    } catch (err) {
      toast.error(err);
    }
  };
  

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>My Bookings</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
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
                        <b>{booking.hotelName}</b>
                      </td>
                      <td>
                        <b>{booking.hotelEmail}</b>
                      </td>
                      <td>
                        <b>{booking.hotelContact}</b>
                      </td>

                      <td>
                        <b>{booking.bookingId}</b>
                      </td>
                      <td>
                        <b>{booking.customerName}</b>
                      </td>
                      <td>
                        <b>{booking.customerContact}</b>
                      </td>

                      <td>
                        <b>{booking.checkIn}</b>
                      </td>
                      <td>
                        <b>{booking.checkOut}</b>
                      </td>
                      <td>
                        <b>{booking.totalRoom}</b>
                      </td>

                      <td>
                        <b>{booking.totalDay}</b>
                      </td>
                      <td>
                        <b>{booking.status}</b>
                      </td>
                      {
                        booking.status == "Approved" ? 
                        <td>
                        <span>You can pay now & show this payment receipt at the time of check-in</span>
                        <br></br>
                        <button className="btn btn-primary" onClick={() => paymentStart(booking.totalAmount)}>{booking.totalAmount}</button>
                      </td> :
                      <td>
                      <b>{booking.totalAmount}</b>
                    </td>
                      }
                      
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
