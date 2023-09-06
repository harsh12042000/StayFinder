import image_photo_02 from "../images/image_photo_02.jpg";
import photo_01 from "../images/photo_01.jpeg";
import photo_02 from "../images/photo_02.jpeg";
import photo_03 from "../images/photo_03.jpg";
import photo_04 from "../images/photo_04.jpg";
import photo_05 from "../images/photo_05.jpeg";
import photo_06 from "../images/photo_06.jpeg";

const TeamMember = ({ photoSrc, name }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <img
        src={photoSrc}
        alt={`Team member - ${name}`}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <>
      <>
        <section id="about-info" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-4 text-primary">About Our Hotels</h1>
                <p className="lead">
                  Discover a world of luxury and comfort at Stay Finder – where every
                  moment is designed to be a memorable escape. Immerse yourself in the
                  elegance of our meticulously designed interiors, adorned with modern
                  amenities that cater to your every need. Whether you're here for
                  business or leisure, our dedicated team is committed to ensuring
                  your stay is nothing short of exceptional. From well-appointed rooms
                  to exquisite dining options, every detail is crafted to create an
                  unforgettable experience. As you step into our tranquil haven, leave
                  behind the demands of daily life and indulge in a sanctuary of
                  relaxation and rejuvenation. Welcome to Stay Finder, where your
                  journey becomes an exquisite memory.
                </p>
                <h3>
                  <p>
                    "Stay Finder: Where comfort meets elegance, and every stay becomes
                    a cherished memory."
                  </p>
                </h3>
              </div>
              <div className="col-md-6">
                <img
                  src={image_photo_02}
                  alt="Hotel Photo 1"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="guest-photos" className="bg-light py-5">
          <div className="container text-center">
            <h2 className="display-4">Our Team</h2>
            <div className="row" style={{margin: "0 8% 0 8%"}}>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={photo_01}
                    height={250}
                    width="30%"
                    alt="Team member 1" image
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Harshada Sonawane</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={photo_02}
                    height={250}
                    width="30%"
                    alt="Team memeber 2"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Rishi Karan</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={photo_03}
                    height={250}
                    width="30%"
                    alt="Team member 3"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Rugved Nagare </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={photo_04}
                    height={250}
                    width="30%"
                    alt="Team member 4"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Sarika Chaudhari</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={photo_05}
                    height={250}
                    width="30%"
                    alt="Team member 5"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Amit Kumar</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={photo_06}
                    height={250}
                    width="30%"
                    alt="Team member 6"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Yogesh Surawade</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-5">
          <div className="container text-center">
            <h2 className="display-4">What Our CEO Say</h2>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <img
                      src="test-bg.jpg"
                      alt="StayFinder"
                      className="img-fluid rounded-circle mb-4"
                    />
                    <p className="lead">
                      "The CEO affirms that Stay Finder redefines hospitality with
                      every moment, offering a mesmerizing experience beyond
                      expectations, from attentive service to breathtaking views."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </>
    </>
    
  );
};

export default AboutUs;