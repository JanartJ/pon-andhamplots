import React,{useState,useEffect} from 'react';
import { Row,Col } from 'react-bootstrap';
import './navheader.css';
import CustomButton from '../shared/button/button';




export default function Banner({bannerImgSrc}) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
  
    updateHeight();
    window.addEventListener('resize', updateHeight);
  
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  

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

  const handleClick = () => {
    if (!validateForm(formData)) return;

    const SENDURL = `https://docs.google.com/forms/d/e/1FAIpQLScGm62E_yvpd3SCITNqJr2jRFtBE0QJLe1KP7tsfPlfDI8Iqg/formResponse?entry.1439694226=${encodeForGoogleForms(
      formData.name
    )}&entry.1816982461=${encodeForGoogleForms(
      formData.email
    )}&entry.1780835660=${encodeForGoogleForms(formData.mobile)}`;

    fetch(SENDURL, {
      method: "POST",
      mode: "no-cors",
    })
      .then(() => {
        setShowSuccess(true);
        alert("Thank you for showing your interset !...Our business team will reach you soon.")
        setFormData({ name: "", email: "", mobile: "" });
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };
  
  return (
    <div className='nav-header-lap'>
        <div className="main-wrapper position-relative">       
          <div className="video-section-wrapper">
              <img src={bannerImgSrc} style={{width:"100%"}} alt="home banner"/>
              <div className="video-overlay"></div>                      
          </div>          
        </div>
        
        <Row className="form-container light-bg shadow rounded p-3 px-md-4 d-flex flex-column flex-md-row align-items-center justify-content-center">
            <Col>
            <input
                type="text"
                name="name"
                placeholder="Name"
                className={`form-control m-2 ${errors.name ? "is-invalid" : ""}`}
                value={formData.name}
                onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </Col>

            <Col>
            <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                className={`form-control m-2 ${errors.mobile ? "is-invalid" : ""}`}
                value={formData.mobile}
                onChange={handleChange}
            />
            {errors.mobile && (
                <div className="invalid-feedback">{errors.mobile}</div>
            )}
            </Col>

            <Col>
            <input
                type="email"
                name="email"
                placeholder="Email"
                className={`form-control m-2 ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
            )}
            </Col>

            <Col>
            <CustomButton
                title="Submit"
                textcolor="btn"
                btnBg="white"
                textWeight={700}
                btnMinWidth="10rem"
                btnBorderRadius="20px"
                handleClick={handleClick}
            />
            </Col>
        </Row>
        {showSuccess && (
            <div className="text-success text-center mt-3">
            Form submitted successfully!
            </div>
        )}
        <br/>
    </div>
  );
}
