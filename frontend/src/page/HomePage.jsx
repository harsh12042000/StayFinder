import Carousel from "./Carousel";
import GetAllLocations from "../LocationComponent/GetAllLocations";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HotelCard from "../HotelComponent/HotelCard";
import Footer from "./Footer";

const HomePage = () => {
  const [hotels, setHotels] = useState([]);
  const { locationId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        locationId
          ? `http://localhost:8081/api/hotel/location?locationId=${locationId}`
          : "http://localhost:8081/api/hotel/fetch"
      );

      if (response.data) {
        setHotels(response.data.hotels);
      }
    };

    fetchData();
  }, [locationId]);

  return (
    <div className="home-page">
      <Carousel />
      <div className="content-container">
        <div className="location-section">
          <GetAllLocations />
        </div>
        <div className="hotels-section">
          <h2>Featured Hotels</h2>
          <div className="hotel-card-list">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} item={hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
