import React,{useState} from 'react'
import ContactForm from './contactForm';
import "./contactForm.css";
import { Row, Col,Modal, Button  } from "react-bootstrap";
import LogoImg from "../../assets/logo/Ponanandham_logo.png";
import FB from "../../assets/icons/fb.png";
import Twitter from "../../assets/icons/twitter.png";
import Instagram from "../../assets/icons/insta.png";
// import Youtube from "../../assets/icons/utube.png";
import Linkedin from "../../assets/icons/linkedin.png";


 const FooterContainer = (props) => {
  
  const handleShow = () => {
      window.location.href="/privacy";
  };

  const handleLink = (path) => {
    window.location.href=`/${path}`;
  };
  return(
    <div className='footer-container-anadham'>
      <ContactForm/>
      <div className='footer-sub-container'>
        <Row>
          <Col md={6}>
            <Row>
              <Row>
                <img className="footer-logoimg" src={LogoImg} alt="logo"/>
              </Row>
              <Row className="footer-content-p">
                <p>Anadham Plots, a trusted plot developer based in Chennai, offers premium residential plots at unbeatable prices in rapidly developing locations. With excellent connectivity, abundant groundwater, and plots ready for immediate construction, they provide the perfect blend of value, convenience, and investment potential for homebuyers and investors alike.</p>
              </Row>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col className="qck-link" md={6}>
                <h4>Quick Links</h4>
                <div onClick={()=>handleLink("")}>Home</div>
                <div onClick={()=>handleLink("aboutus")}>About Us</div>
                <div onClick={()=>handleLink("blogs")}>Blogs</div>      
                <div onClick={()=>handleLink("contactus")}>Contact Us</div>           
              </Col>
              {/* <Col className="qck-link" md={4}>
                <h4>Quick Links</h4>
                <div>seller spot</div>
                <div>careers</div>
                <div>core team</div>                
              </Col> */}
              <Col className="qck-link" md={6}>
                <h4>Our Projects</h4>
                <div onClick={()=>handleLink("kanchipuram")}>Ongoing Projects</div>
                <div onClick={()=>handleLink("padappai")}>Completed Projects</div>
                <div onClick={()=>handleLink("redhills")}>Upcoming Projects</div>
              </Col>              
            </Row>
            <br/>
            <Row className='footer-margin-bottom footer-text-indent'>Follow Us On</Row>
            <Row className='footer-social-icons'>
              <img src={FB} alt="facebook"/>
              <img src={Twitter} alt="twitter"/>
              <img src={Instagram} alt="instagram"/>
              <img src={Linkedin} alt="Linkedin"/>
            </Row>
          </Col>
        </Row>
        <br></br>
        <Row> 
            <Col className='footer-last-container'>       
              All rights reserved © {new Date().getFullYear()} Anadhamplots.in  | 
              <span style={{cursor:"pointer"}} onClick={()=>handleShow()} > <u>Terms and conditions apply</u> </span>  
            </Col>      
        </Row>
      </div>
     
    </div>
   )
  }

export default FooterContainer;