const ContactUs = () => {
  return (
    <section id="contact" className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h2 className="display-4">Contact Us</h2>
        <p className="lead">
          Have a question or need assistance? Reach out to us!
        </p>
        <ul className="list-unstyled">
          <li>
            <strong>Phone:</strong> +1 (123) 456-7890
          </li>
          <li>
            <strong>Email:</strong> info@stayfinder.com
          </li>
          <li>
            <strong>Address:</strong> Stay Finder Way,Belapur Navi Mumbai, India
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows={4}
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default ContactUs;
