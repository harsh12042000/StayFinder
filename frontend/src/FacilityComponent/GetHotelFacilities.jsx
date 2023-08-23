import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const GetHotelFacilities = (hotel) => {
  const { hotelId } = useParams();

  console.log("FETCHED HOTEL ID : " + hotelId);

  const [facilities, setFacilities] = useState([]);

  if(hotel != null) {

  }

  const retrieveAllFacilities = async () => {
    const response = await axios.get(
      "http://localhost:8081/api/facility/hotel?hotelId=" + hotelId
    );
    return response.data;
  };

  useEffect(() => {
    const getAllFacilities = async () => {
      const allFacilities = await retrieveAllFacilities();
      if (allFacilities) {
        setFacilities(allFacilities.facilities);
      }
    };

    getAllFacilities();
  }, []);

  return (
    <div
      class="list-group"
      style={{
        height: "25rem",
      }}
    >
      <Link
        to="#"
        class="list-group-item list-group-item-action"
      >
        <b>Facilities</b>
      </Link>

      <div
        style={{
          overflowY: "auto",
        }}
      >
        {facilities.map((f) => {
          return (
            <Link
              to="#"
              class="list-group-item list-group-item-action text-color custom-bg"
            >
              <b>{f.name}</b>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GetHotelFacilities;
