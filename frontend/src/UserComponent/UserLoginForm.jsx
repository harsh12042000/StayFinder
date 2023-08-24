import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (loginRequest.role === "0") {
      newErrors.role = "Role must be selected";
    }

    if (!loginRequest.emailId.trim()) {
      newErrors.emailId = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginRequest.emailId)) {
      newErrors.emailId = "Invalid email address";
    }

    // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    // if (!passwordPattern.test(loginRequest.password)) {
    //   newErrors.password =
    //     "Password must be at least 8 characters, contain one uppercase letter, one lowercase letter, and one number";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loginAction = (e) => {
    e.preventDefault();
    if (validateForm()) {
      fetch("http://localhost:8081/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      })
        .then((result) => {
          if (!result.ok) {
            throw new Error("Login failed!"); 
          }
          return result.json();
        })
        .then((res) => {
          if (res.role === "Admin") {
            localStorage.setItem("active-admin", JSON.stringify(res));
            navigate("/admin");
          } else if (res.role === "Customer") {
            localStorage.setItem("active-customer", JSON.stringify(res));
            navigate("/home");
          } else if (res.role === "Hotel") {
            localStorage.setItem("active-hotel", JSON.stringify(res));
            navigate("/home");
          }

          toast.success("Logged in successfully!!!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          window.location.reload(true);
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">User Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div class="mb-3 text-color">
                <label for="role" class="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="role"
                >
                  <option value="0">Select Role</option>
                  <option value="Admin"> Admin </option>
                  <option value="Customer"> Customer </option>
                  <option value="Hotel"> Manager </option>
                </select>
                {errors.role && (
                  <div className="invalid-feedback">{errors.role}</div>
                )}
              </div>

              <div className="mb-3 text-color">
                <label for="emailId" class="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    errors.emailId ? "is-invalid" : ""
                  }`}
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                />
                {errors.emailId && (
                  <div className="invalid-feedback">{errors.emailId}</div>
                )}
              </div>
              <div className="mb-3 text-color">
                <label for="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
                {/* {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )} */}
              </div>
              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={loginAction}
              >
                Login
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
