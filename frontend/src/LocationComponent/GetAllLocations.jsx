import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GetAllLocations = () => {
  const [locations, setLocations] = useState([]);

  const retrieveAllLocations = async () => {
    const response = await axios.get(
      "http://localhost:8081/api/location/fetch"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllLocations = async () => {
      const allLocations = await retrieveAllLocations();
      if (allLocations) {
        setLocations(allLocations.locations);
      }
    };

    getAllLocations();
  }, []);

  return (
    <div className="location-container">
      <h1 className="page-title">Explore Beautiful Locations</h1>
      <div className="location-list">
        {locations.map((location) => (
          <Link
            key={location.id}
            to={`/home/hotel/location/${location.id}/${location.city}`}
            className="location-item"
            style={{ backgroundImage: `url(${location.image})` }}
          >
            <div className="location-details">
              <h2 className="location-title">{location.city}</h2>
              <p className="location-description">
                Discover the charm of {location.city} with our hotels.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GetAllLocations;
