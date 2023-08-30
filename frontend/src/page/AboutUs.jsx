import photo02 from "../images/photo-2.jpg";  
// import person1 from "../images/person-1.jpg";

const AboutUs = () => {
  return (
    <>
    <>
  <section id="about-info" className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4 text-primary">About Our Hotel</h1>
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
            src={photo02}
            alt="Hotel Photo 1"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  </section>
  <section id="guest-photos" className="bg-light py-5">
    <div className="container text-center">
      <h2 className="display-4">Our Team</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              // src={person1}
              src="person.jpg"
              alt="Team member 1"
              className="card-img-top rounded-circle"
            />
            <div className="card-body">
              <h5 className="card-title">Person 1</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="person-2.jpg"
              alt="Team memeber 2"
              className="card-img-top rounded-circle"
            />
            <div className="card-body">
              <h5 className="card-title">Person 2</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="person-3.png"
              alt="Team member 3"
              className="card-img-top rounded-circle"
            />
            <div className="card-body">
              <h5 className="card-title">Amit kumar </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="person-4.jpg"
              alt="Team member 4"
              className="card-img-top rounded-circle"
            />
            <div className="card-body">
              <h5 className="card-title">Person 4</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="person-5.jpg"
              alt="Team member 5"
              className="card-img-top rounded-circle"
            />
            <div className="card-body">
              <h5 className="card-title">Person 5</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="person-6.jpg"
              alt="Team member 6"
              className="card-img-top rounded-circle"
            />
            <div className="card-body">
              <h5 className="card-title">Person 6</h5>
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
                alt="Guest Photo"
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
