import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import "./contactForm.css";

const ContactForm = ({type="normal"}) => {
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  // };

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
  });
  
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
 
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);
    validateForm(updatedFormData);
  };

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encodeForGoogleForms = (str) => {
    return encodeURIComponent(str).replace(/%20/g, "+");
  };

  const handleClick = (e) => {
    if (!validateForm(formData)) return;

    const SENDURL = `https://docs.google.com/forms/d/e/1FAIpQLScGm62E_yvpd3SCITNqJr2jRFtBE0QJLe1KP7tsfPlfDI8Iqg/formResponse?entry.1439694226=${encodeForGoogleForms(
      formData.name
    )}&entry.1816982461=${encodeForGoogleForms(
      formData.email
    )}&entry.1780835660=${encodeForGoogleForms(formData.mobile)}`;
    console.log("SENDURL",SENDURL);
    // fetch(SENDURL, {
    //   method: "POST",
    //   mode: "no-cors",
    // })
    //   .then(() => {
        setShowSuccess(true);
        setSubmitted(true);
        // alert("Thank you for showing your interset !...Our business team will reach you soon.")
        setFormData({ name: "", email: "", mobile: "" });
        if(type === "normal"){
            setTimeout(() => {
            setShowSuccess(false);
            setSubmitted(false);
          }, 5000);
        }
      // })
      // .catch((error) => {
      //   console.error("Error submitting form:", error);
      // });
  };

  return (
    <div className="container-contactform" 
    style={{padding: type==="modal" ? "0px" : "60px 20px", minHeight: type==="modal" ? "0vh" : "100vh"}}>
      {type === "normal" && (<>
      <h5 className="title-h5">Anandham Plots</h5>
      <h1 className="title">Your Dream. Your Plot. Your Choice.</h1>
      <div className="features">
        <span><span className="tick-circle">✔</span> Affordable Rates</span>
        <span><span className="tick-circle">✔</span> Amazing Location</span>
        <span><span className="tick-circle">✔</span> Ready to Construction</span>
        <span><span className="tick-circle">✔</span> Copius Groundwater</span>
      </div>
      </>)}

      <div className="footer-form-container" >
        <div data-aos="fade-up-right" className="form-section large" style={{width: type==="modal" ? "100%" : ""}}>
          {!submitted ? (
            <div className="quote-section" >
              <h2 className="heading-bold">We Are Happy to Help</h2>
              <p>Fill out the details and enquiry now.</p>
              <div className="form-grid">
                <div className="input-container">
                  <FaUser className="icon" />
                  <input
                    type="text" 
                    name="name"
                    placeholder="Name"
                    className={`${errors.name ? "is-invalid" : ""}`}
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="input-container">
                  <FaPhone className="icon" />
                  <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile"
                      className={`${errors.mobile ? "is-invalid" : ""}`}
                      value={formData.mobile}
                      onChange={handleChange}
                  />
                  {errors.mobile && (
                      <div className="invalid-feedback">{errors.mobile}</div>
                  )}
                </div>
                <div className="input-container">
                  
                  <FaEnvelope className="icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`${errors.email ? "is-invalid" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </div>
              <button type="submit" className="submit-button" onClick={handleClick}>Enquiry Now</button>
              
            </div>
          ) : (
            <div className="thank-you-message">
              {showSuccess && (
                  <div className="green-text text-center mt-3">
                  Form submitted successfully!
                  </div>
              )}
              <p>Thank you for your request! We will get back to you soon.</p>
              {type === "modal" && (
              <a
                href="/brouchres/kanchi_brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="download-brocher-button"
              >
                View & Download Brochure
              </a>
              )}
            </div>
          )}
        </div>

        {/* Contact Info Section */}
        {type === "normal" && (
          <div data-aos="fade-up-left" className="contact-section small">
            <h2 className="heading-bold">Contact Info</h2>
            <div>
              <h3>Our Location</h3>
              <p><b>Anandham Plots ,</b> <br/>Ground Floor , 63/29, Poes Garden, Teynampet, Chennai, Tamil Nadu, 600086.
              </p>
            </div>
            <div>
              <h3>Quick Contact</h3>
              <p>Email: sales@anadhamplots.com</p>
              <p>Call Us: +91 99623 43243</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;