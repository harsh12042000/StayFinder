import { useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import CustomerHeader from "./CustomerHeader";
import HotelHeader from "./HotelHeader";
import NormalHeader from "./NormalHeader";
import { useEffect, useState } from "react";

const RoleNav = () => {
  const user = JSON.parse(localStorage.getItem("active-customer"));
  const admin = JSON.parse(localStorage.getItem("active-admin"));
  const hotel = JSON.parse(localStorage.getItem("active-hotel"));

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

//user.firstName

  if (user != null) {
    return <CustomerHeader firstName = {user.firstName}/>;
  } else if (admin != null) {
    return <AdminHeader />;
  } else if (hotel != null) {
    return <HotelHeader/>;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
