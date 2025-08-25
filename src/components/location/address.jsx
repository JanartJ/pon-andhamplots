import React from 'react'
import CustomButton from '../shared/button/button';
import "./address.css";
import anandham_logo from "../../assets/logo/Ponanandham_logo.png";
import { Col, Row } from 'react-bootstrap';
import FB from "../../assets/icons/fb.png";
import Twitter from "../../assets/icons/twitter.png";
import Instagram from "../../assets/icons/insta.png";
import Youtube from "../../assets/icons/utube.png";
import Linkedin from "../../assets/icons/linkedin.png";

/**
* @author
* @function Address
**/

const Address = (props) => {
    const handleBtnClick = ()=>{
        window.open("https://maps.app.goo.gl/niEPqFCMe8fvcokf6", "_blank")
    }
    return(
        <div className='footer-address-container'>
            <div className='address-detail-container'>
                <div className='margin-auto'>
                    <img
                        className='address-logo'
                        src={anandham_logo}      
                        alt="Anandhamplots Logo"       
                    />
                </div>
                <p className='margin-auto text-center green-text'>Ground Floor,63/29, Poes Garden, Teynampet, Chennai, Tamil Nadu, 600086</p>
                <h5 className='margin-auto text-justify heading-bold green-text'>RERA: TN/29/Layout/3204/2024</h5>
            </div>
            <div className='address-enquiry-container'>
                {/* Top curve */}
                <div className='address-shades-div address-top-div'/>

                {/* Bottom curve */}
                <div className='address-shades-div address-bottom-div'/>

                {/* Content inside */}
                <div className='address-content'>
                    <h2 className='white-text heading-bold'>We Are Happy to Help</h2>
                    <p className='white-text'>Call or email us for more details</p>
                    <div className='enquiry_now_btn'>
                        <CustomButton
                            title={"Enquiry Now"}
                            textcolor={"green"}
                            btnBg={"light"}
                            textWeight={700}
                            btnMinWidth={"10rem"}
                            btnBorderRadius={"20px"}
                            handleClick={handleBtnClick}
                    />                   
                    </div>
                    <br/>
                </div>
            </div>
            <div className='footer-container'>
                <div>
                    <Row className='footer-grid-container'>
                        <Col md={3} className='footer-quicklinks footer-right-border footer-margin-bottom'>
                            <Row><h5>Quick Links</h5></Row>                            
                            <Row>
                                <a>Home</a>
                            </Row>
                            <Row><a>About Us</a></Row>
                            <Row><a>Blogs</a></Row>
                            <Row><a>Projects</a></Row>
                            <Row><a>Contact</a></Row>
                        </Col>
                        <Col md={3} className='footer-aboutus footer-right-border footer-margin-bottom'>
                            <Row><h5>About Us</h5></Row>                          
                            <Row><a>Profile</a></Row>
                            <Row><a>Core Team</a></Row>
                            <Row><a>Why Anandham</a></Row>
                            <Row><a>Plots</a></Row>
                        </Col>
                        <Col md={2} className='footer-projects'>
                            <Row><h5>Projects</h5></Row>
                            <Row><a>Ongoing</a></Row>
                            <Row><a>Completed</a></Row>
                            <Row><a>Upcoming</a></Row>
                            <Row><a>Coming Soon</a></Row>
                        </Col>
                        <Col md={4} className='footer-bottom-logo'>
                            <Row>
                                <img
                                    className='footer-address-logo'
                                    src={anandham_logo}      
                                    alt="Anandhamplots Logo"       
                                />
                            </Row>
                            <Row className='footer-margin-bottom footer-text-indent'>Follow Us On</Row>
                            <Row className='footer-social-icons'>
                                <img src={FB} alt="facebook"/>
                                <img src={Twitter} alt="twitter"/>
                                <img src={Instagram} alt="instagram"/>
                                <img src={Youtube} alt="youtube"/>
                                <img src={Linkedin} alt="Linkedin"/>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='footer-copyright'>
                        <div>Copyright @ 2025 Anandhamplots.com. All Rights Reserved | Terms of Use | Privacy Policy</div>
                    </Row>
                </div>
            </div>
        </div>
    )
  }

export default Address;
