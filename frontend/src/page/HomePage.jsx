import Carousel from "./Carousel";
import GetAllLocations from "../LocationComponent/GetAllLocations";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, redirect, useParams } from "react-router-dom";
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
      <div className="bg-dark text-light text-center p-4">
          <h1 className="mb-3">Expand your business with us</h1>
          <p>
            If you're interested in registering your hotel with us or have any
            queries, please feel free to contact our team. We'd be happy to
            assist you.
          </p>
          <Link to="/listyourhotel">
            <button className="btn btn-primary">Click Here</button>
          </Link>
        </div>
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
