import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListYourHotel = () => {
  const [description, setDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [city, setCity] = useState("");
  const [ratings, setRatings] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  const [formData, setFormData] = useState("");; 

  const validateData = () => {
    if (!customerName || !customerEmail || !city || !state || !contactNumber || !ratings || !description) {
      toast.error("Please fill all the required fields");
      return false;
    }
    return true;
  };

  const sendMail = async (event) => {
    event.preventDefault();
  
    if (validateData()) {
      try {
        // const requestData = {
        //   name: formData.CustomerName,
        //   email: formData.CustomerEmail,
        //   state: formData.state,
        //   contactNumber: formData.contactNumber,
        //   city: formData.city,
        //   ratings: formData.Ratings,
        //   description: formData.description,
        // };

        const requestData = {
          name: customerName, 
          email: customerEmail, 
          state: state,
          contactNumber: contactNumber,
          city: city,
          ratings: ratings, 
          description: description,
        };
  
        const response = await axios.post("http://localhost:8081/mail/hotelquery", requestData);
  
        if (response != null) {
          toast.success("Thank You! We will contact you soon!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        console.error("Error sending form data:", error);
      }
    }
  };
  

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div className="card form-card border-color custom-bg" style={{ width: "50%" }}>
          <div className="card-header bg-color text-center custom-bg-text">
            <h5 className="card-title">List Your Hotel?</h5>
            <h4>Feel Free to Contact Us</h4>
          </div>
          <div className="card-body text-color">
            <form onSubmit={sendMail}>
              <div className="mb-3">
                <label htmlFor="customerName" className="form-label">
                  <b>Your Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerName"
                  placeholder="Enter Your Name.."
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                  value={customerName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <b>Email:</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="customerEmail"
                  placeholder="Enter Your Email.."
                  onChange={(e) => {
                    setCustomerEmail(e.target.value);
                  }}
                  value={customerEmail}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">
                  <b>Contact Number:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Enter Your Mobile Number.."
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                  value={contactNumber}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  <b>City:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter Your City.."
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  value={city}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  <b>State:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="Enter Your State.."
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  value={state}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ratings" className="form-label">
                  <b>Ratings:</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="ratings"
                  placeholder="Enter Your Ratings.."
                  onChange={(e) => {
                    setRatings(e.target.value);
                  }}
                  value={ratings}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  <b>Description</b>
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Enter description.."
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                />
              </div>

              <input
                type="submit"
                className="btn bg-color custom-bg-text"
                value="Submit"
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListYourHotel;
