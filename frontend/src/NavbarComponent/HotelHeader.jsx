import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HotelHeader = ({firstName}) => {
  let navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("active-hotel"));
  console.log(user);

  const hotelLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    localStorage.removeItem("active-hotel");
    // window.location.reload(true);
    navigate("/user/login");
  };

  return (
    <>
    <h4>Welcome, {firstName} !</h4>
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
    <li className="nav-item">
        <Link
          to="/admin/add-facility"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Facility</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="user/hotel/bookings/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">All Booked Hotel</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={hotelLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
    </>
  );
};

export default HotelHeader;
