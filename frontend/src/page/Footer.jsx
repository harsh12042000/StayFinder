import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div class=" bg-dark mb-5 rounded">
      <div class="container  ">
        <footer class="text-center text-lg-start text-white">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase mb-4">Stay Finder</h5>


                  <p>
                    Being a 24/7 Hotel is one of our best amenities because we
                    can offer our customer unrestricted freedom of access from
                    sun up to sun down and everywhere in between. You no longer
                    have to worry about anything in Hotel at any time!
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 ">
                  <h5 class="text-uppercase text-white-4 mb-4">About us</h5>

                  <ul class="list-unstyled mb-0 ">
                    <li>
                      <Link to="/about" class="text-white text-decoration-none">
                        About Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" class="text-white text-decoration-none">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery" class="text-white text-decoration-none">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-white-4 mb-4">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="mailto:stayfinder9@.com" class="text-white text-decoration-none">
                        <p>Email: stayfinder9@.com</p>
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white text-decoration-none">
                        <p>Phone: +123 456 7890</p>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <ul class="list-unstyled mb-0 d-flex justify-content-right">
                    <li>
                      <FaFacebookSquare
                        className="connect text-light text-right m-2 "
                        size={42}
                      />
                    </li>
                    <li>
                      <FaLinkedin
                        className="connect text-light m-2"
                        size={38}
                      />
                    </li>
                    <li>
                      <AiFillInstagram
                        className="connect text-light m-2"
                        size={38}
                      />
                    </li>
                    <li>
                      <IoLogoYoutube
                        className="connect text-light m-2"
                        size={42}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-white">Register for free</span>
                <Link to="/user/customer/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color bg-success "
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center " style={{ height: 50 }}>
            © 2023 Copyright : <nbsp></nbsp>
            <a class="text-white text-decoration-none" href="localhost:3000/">
              <nbsp></nbsp> Stay Finder
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
