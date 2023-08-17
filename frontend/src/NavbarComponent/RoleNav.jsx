import { useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import CustomerHeader from "./CustomerHeader";
import HotelHeader from "./HotelHeader";
import NormalHeader from "./NormalHeader";
import { useEffect, useState } from "react";

const RoleNav = () => {
  const user = JSON.parse(sessionStorage.getItem("active-customer"));
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  const hotel = JSON.parse(sessionStorage.getItem("active-hotel"));

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  if (user != null) {
    return <CustomerHeader />;
  } else if (admin != null) {
    return <AdminHeader />;
  } else if (hotel != null) {
    return <HotelHeader />;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
