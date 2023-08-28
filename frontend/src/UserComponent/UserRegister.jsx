import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const UserRegister = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
    age: "",
    sex: "",
  });

  if (document.URL.indexOf("admin") != -1) {
    user.role = "Admin";
  } else if (document.URL.indexOf("hotel") != -1) {
    user.role = "Hotel";
  } else if (document.URL.indexOf("customer") != -1) {
    user.role = "Customer";
  }

  console.log("ROLE FECTHED : " + user.role);

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [genders, setGenders] = useState([]);

  const retrieveAllGenders = async () => {
    const response = await axios.get("http://localhost:8081/api/user/gender");
    return response.data;
  };

  useEffect(() => {
    const getAllGenders = async () => {
      const allGenders = await retrieveAllGenders();
      if (allGenders) {
        setGenders(allGenders.genders);
      }
    };

    getAllGenders();
  }, []);


  const validateFields = () => {
    const nameRegex = /^[a-zA-Z]{1,29}$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/; 
    const contactRegex = /^[0-9]{10}$/; 
    const cityRegex = /^[a-zA-Z\s]{1,30}$/; 
    const pincodeRegex = /^\d{6}$/; 

    if (!nameRegex.test(user.firstName) || !nameRegex.test(user.lastName)) {
      toast.error(
        "First and Last names be at most 30 characters without numbers or symbols."
      );
      return false;
    }
    if (!emailRegex.test(user.emailId)) {
      toast.error("Email must include '@' symbol and a domain.");
      return false;
    }
    if (!passwordRegex.test(user.password)) {
      toast.error(
        "Password must be 8-30 characters, start with a capital letter, and include at least one symbol and one number."
      );
      return false;
    }
    if (!user.sex || genders.indexOf(user.sex) < 0) {
      toast.error("Please select a valid gender.");
      return false;
    }
    if (!contactRegex.test(user.contact)) {
      toast.error("Contact number must be 10 digits.");
      return false;
    }
    if (!cityRegex.test(user.city)) {
      toast.error(
        "City should not have any symbol or number, also max 30 letters."
      );
      return false;
    }
    if (!pincodeRegex.test(user.pincode)) {
      toast.error("Pincode should be 6 digits.");
      return false;
    }

    // Age Validation
    if (user.age < 18 || user.age > 150) {
      toast.error("Age must be between 18 and 150.");
      return false;
    }

    // Street Validation
    if (user.street.length < 4 || user.street.length > 80) {
      toast.error("Street must be between 4 and 80 characters.");
      return false;
    }

    if (user.street.length > 80) {
      toast.error("Street should not have more than 80 characters.");
      return false;
    }
    return true;
  };

  const saveUser = (event) => {
    event.preventDefault();

    if (!validateFields()) {
      return; 
    }

    fetch("http://localhost:8081/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      toast.success("Registered Successfully!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      result
        .json()
        .then((res) => {
          console.log("response", res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "50rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">
              {user.role == "Hotel"
                ? "Add Manager Details"
                : "Register " + user.role}
            </h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveUser}>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="title" className="form-label">
                  <b> First Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                />
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="description" className="form-label">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleUserInput}
                  value={user.lastName}
                />
              </div>

              <div className="col-md-6 mb-3 text-color">
                <b>
                  <label className="form-label">Email Id</label>
                </b>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="quantity" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                />
              </div>

              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="sex" className="form-label">
                  <b>User Gender</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="sex"
                >
                  <option value="0">Select Gender</option>

                  {genders.map((gender) => {
                    return <option value={gender}> {gender} </option>;
                  })}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Contact No</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={user.contact}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Age</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  onChange={handleUserInput}
                  value={user.age}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="description" className="form-label">
                  <b> Street</b>
                </label>
                <textarea
                  className="form-control"
                  id="street"
                  name="street"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.street}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="form-label">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="pincode" className="form-label">
                  <b>Pincode</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={handleUserInput}
                  value={user.pincode}
                />
              </div>

              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn col-md-3"
                  value="Register User"
                />
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
