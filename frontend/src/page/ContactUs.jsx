import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

const ContactUs = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.length < 5 || formData.name.length > 50) {
      newErrors.name = 'Name must be between 5 and 50 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 100) {
      newErrors.message = 'Message must be a maximum of 100 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (validateForm()) {
  //     setFormData(initialFormData);
  //     setErrors({});
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      try {
        const queryParams = `name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&message=${encodeURIComponent(formData.message)}`;
      
      const response = await axios.get(`http://localhost:8081/mail/send?${queryParams}`);

      if(response != null) {
        toast.success("Mail Sent Successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
        setFormData(initialFormData);
        setErrors({});
      } catch (error) {
        console.error('Error sending form data:', error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const updatedErrors = { ...errors };
    delete updatedErrors[id];

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors(updatedErrors);
  };



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
                <strong>Address:</strong> Stay Finder Way, Belapur Navi Mumbai, India
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
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
