import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import HotelCarousel from "../HotelComponent/HotelCarousel";
import { useParams } from "react-router-dom";
import axios from "axios";
import HotelCard from "../HotelComponent/HotelCard";

const AddHotelReview = () => {
  let user = JSON.parse(localStorage.getItem("active-customer"));

  const [userId, setUserId] = useState(user.id);

  let { hotelId, locationId } = useParams();

  const [star, setStar] = useState("");
  const [review, setReview] = useState("");

  const [hotels, setHotels] = useState([]);

  const [hotel, setHotel] = useState({
    id: "",
    name: "",
    description: "",
    street: "",
    pincode: "",
    emailId: "",
    pricePerDay: "",
    totalRoom: "",
    image1: "",
    image2: "",
    image3: "",
    userId: "",
    location: { id: "", city: "", description: "" },
    facility: [{ id: "", name: "", description: "" }],
  });

  let navigate = useNavigate();

  const retrieveHotel = async () => {
    const response = await axios.get(
      "http://localhost:8081/api/hotel/id?hotelId=" + hotelId
    );

    return response.data;
  };

  useEffect(() => {
    const getHotel = async () => {
      const retrievedHotel = await retrieveHotel();

      setHotel(retrievedHotel.hotel);
    };

    const getHotelsByLocation = async () => {
      const allHotels = await retrieveHotelsByLocation();
      if (allHotels) {
        setHotels(allHotels.hotels);
      }
    };

    getHotel();
    getHotelsByLocation();
  }, [hotelId]);

  const retrieveHotelsByLocation = async () => {
    console.log("Lets print location id here " + hotel.location.id);

    const response = await axios.get(
      "http://localhost:8081/api/hotel/location?locationId=" + locationId
    );
    console.log(response.data);
    return response.data;
  };

  const saveHotelReview = (e) => {
    if (user == null) {
      e.preventDefault();
      alert("Please login as Customer for adding your review!!!");
    } else {
      e.preventDefault();
      setUserId(user.id);
      let data = { userId, hotelId, star, review };

      fetch("http://localhost:8081/api/hotel/review/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        result.json().then((res) => {
          console.log(res);
          navigate("/hotel/" + hotel.id + "/location/" + hotel.location.id);
          console.log(res.responseMessage);
          toast.warn(res.responseMessage, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      });
    }
  };

  return (
    <div className="add-hotel-review-container">
      <div className="container">
        <div className="mt-5 mb-5">
          <div className="card form-card">
            <div className="card-header">
              <h5 className="card-title">Add Hotel Review</h5>
            </div>
            <div className="card-body mb-5">
              <form onSubmit={saveHotelReview}>
                <div className="mb-3">
                  <label className="form-label"><b>Star</b></label>
                  <select
                    name="locationId"
                    onChange={(e) => {
                      setStar(e.target.value);
                    }}
                    className="form-control"
                  >
                    <option value="">Select Star</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="review" className="form-label"><b>Hotel Review</b></label>
                  <textarea
                    className="form-control"
                    id="review"
                    rows="3"
                    placeholder="Enter your review..."
                    onChange={(e) => {
                      setReview(e.target.value);
                    }}
                    value={review}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Add Review</button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-sm-12">
          <h2>Other Hotels in {hotel.location.city} Location:</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {hotels.map((h) => {
              return <HotelCard key={h.id} item={h} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotelReview;
