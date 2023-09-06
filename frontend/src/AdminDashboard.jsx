import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import NotFound from "./page/PageNotFound";
import axios from "axios";

const admin = JSON.parse(localStorage.getItem("active-admin"));

const App = () => {
  return admin ? (
    <AdminDashboard />
  ) : (
    <p>
      <NotFound />
    </p>
  );

  // return <AdminDashboard/>
};

const AdminDashboard = () => {
  const [hotelData, setHotelData] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const fetchData = async () => {
    if (admin) {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/admin/fetch/all"
        );
        setHotelData(response.data);
        setGraphData(response.data.graphData);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getAllHotels = async () => {
    if (admin) {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/hotel/fetch"
        );
        // console.log(response.data.hotels);
        setAllBookings(response.data.hotels);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const categories = graphData.map((item) => item[0]);
  const data = graphData.map(item => item[1]);

  const chartOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: categories,
    },
  };

  const chartSeries = [
    {
      name: "Users",
      data: data,
    },
  ];

  useEffect(() => {
    fetchData();
    getAllHotels();
  }, [admin]);

  return (
    <div>
      <>
        <main id="main" className="main">
          <div className="pagetitle" style={{ margin: "0 0 3% 0" }}>
            <h1>Dashboard</h1>
          </div>
          {/* End Page Title */}
          <section className="section dashboard">
            <div className="row">
              {/* Left side columns */}
              <div className="col-lg-8">
                <div className="row">
                  {/* Hotels Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="card-body">
                        <h5 className="card-title">Registered Hotels </h5>
                        <div className="d-flex align-items-center">
                          <div className="ps-3">
                            <h6 className="mb-0">{hotelData.HotelsCount}</h6>
                          </div>
                          <div className="ms-auto">
                            <i className="fas fa-hotel fa-3x text-primary"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* End Sales Card */}
                  {/* Revenue Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">
                      <div className="card-body">
                        <h5 className="card-title">Total Transactions</h5>
                        <div className="d-flex align-items-center">
                          <div className="ps-3">
                            <h6 className="mb-0">Rs. {hotelData.revenue}</h6>
                          </div>
                          <div className="ms-auto">
                            <i className="fas fa-rupee-sign fa-3x text-success"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
                      <div className="card-body">
                        <h5 className="card-title">Customers</h5>
                        <div className="d-flex align-items-center">
                          <div className="ps-3">
                            <h6 className="mb-0">{hotelData.customersCount}</h6>
                          </div>
                          <div className="ms-auto">
                            <i className="fas fa-users fa-3x text-danger"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card top-selling overflow-auto">
                      <div className="card-body pb-0">
                        <h5 className="card-title">Registered Hotels</h5>
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">City</th>
                              <th scope="col">Available Rooms</th>
                            </tr>
                          </thead>
                          <tbody>
                            {allBookings == null ? (
                              <p>Loading...</p>
                            ) : (
                              allBookings.map((booking) => {
                                return (
                                  <tr>
                                    <td>{booking.id}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.emailId}</td>
                                    <td className="fw-bold">
                                      {booking.location.city}
                                    </td>
                                    <td>{booking.totalRoom}</td>
                                  </tr>
                                );
                              })
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body pb-0">
                    <h5 className="card-title">
                    Enquiries <span>| Per Hotel</span>
                    </h5>
                    <div id="trafficChart" style={{ minHeight: 400 }}>
                      <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="bar"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Right side columns */}
            </div>
          </section>
        </main>
        {/* End #main */}
      </>
    </div>
  );
};

export default App;
