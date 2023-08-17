import React from "react";
import ReactApexChart from "react-apexcharts";
import NotFound from "./page/PageNotFound";

const admin = JSON.parse(sessionStorage.getItem("active-admin"));

const App = () => {
  return admin ? (
    <AdminDashboard />
  ) : (
    <p>
      <NotFound />
    </p>
  );
};

const chartOptions = {
  chart: {
    type: "line",
  },
  xaxis: {
    categories: ["Monday", "Tuesday", "Wed", "Thursday", "Friday", "Saturday", "Sunday"],
  },
};

const chartSeries = [
  {
    name: "Revenue",
    data: [10, 15, 8, 20, 12, 20, 10],
  },
];

const AdminDashboard = () => {
  return (
    <div>
      <>
        <main id="main" className="main">
          <div className="pagetitle" style={{margin: "0 0 3% 0"}}>
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
                        <h5 className="card-title">
                          Registered Hotels                     </h5>
                        <div className="d-flex align-items-center">
                          <div className="ps-3">
                            <h6 className="mb-0">145</h6>
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
                        <h5 className="card-title">
                          Revenue
                        </h5>
                        <div className="d-flex align-items-center">
                          <div className="ps-3">
                            <h6 className="mb-0">Rs.3,264</h6>
                          </div>
                          <div className="ms-auto">
                            <i className="fas fa-rupee-sign fa-3x text-success"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* End Revenue Card */}
                  {/* Customers Card */}
                  <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
                      <div className="card-body">
                        <h5 className="card-title">
                          Customers
                        </h5>
                        <div className="d-flex align-items-center">
                          <div className="ps-3">
                            <h6 className="mb-0">1244</h6>
                          </div>
                          <div className="ms-auto">
                            <i className="fas fa-users fa-3x text-danger"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* End Customers Card */}
                  {/* Top Selling */}
                  <div className="col-12">
                    <div className="card top-selling overflow-auto">
                      <div className="card-body pb-0">
                        <h5 className="card-title">
                          Registered Hotels
                        </h5>
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Location</th>
                              <th scope="col">Hotel Manager</th>
                              <th scope="col">Rooms</th>
                              <th scope="col">Revenue</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img src="assets/img/product-1.jpg" alt="" />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Ut inventore ipsa voluptas nulla
                                </a>
                              </td>
                              <td>Hello Test</td>
                              <td className="fw-bold">124</td>
                              <td>$5,828</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img src="assets/img/product-2.jpg" alt="" />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Exercitationem similique doloremque
                                </a>
                              </td>
                              <td>Hello Test</td>
                              <td className="fw-bold">98</td>
                              <td>$4,508</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img src="assets/img/product-3.jpg" alt="" />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Doloribus nisi exercitationem
                                </a>
                              </td>
                              <td>Hello Test</td>
                              <td className="fw-bold">74</td>
                              <td>$4,366</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img src="assets/img/product-4.jpg" alt="" />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Officiis quaerat sint rerum error
                                </a>
                              </td>
                              <td>Hello Test</td>
                              <td className="fw-bold">63</td>
                              <td>$2,016</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img src="assets/img/product-5.jpg" alt="" />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Sit unde debitis delectus repellendus
                                </a>
                              </td>
                              <td>Hello Test</td>
                              <td className="fw-bold">41</td>
                              <td>$3,239</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* End Top Selling */}
                </div>
              </div>
              {/* End Left side columns */}
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body pb-0">
                    <h5 className="card-title">
                      Revenue <span>| Today</span>
                    </h5>
                    <div id="trafficChart" style={{ minHeight: 400 }}>
                      <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="line"
                      />
                    </div>
                  </div>
                </div>
                {/* End Website Traffic */}
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
