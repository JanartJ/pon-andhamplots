import React,{useState,useEffect} from 'react';
import { Nav,Row,Col } from 'react-bootstrap';
import './navheader.css';
import CustomButton from '../shared/button/button';
import anandham_logo from "../../assets/logo/anandham_Logo.png"; 
import Padappai from "../../assets/images/card1.jpg";
import Kanchipuram from "../../assets/images/card2.jpg";
import Redhills from "../../assets/images/card3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faBook,faBriefcase,faCaretDown,faPhone,faHourglassEnd,faHourglassHalf,faHourglassStart,faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavHeader() {

 


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

  



  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showProject, setShowProject] = useState("Padappai");
  const handleProjectClick = (values) => {
    console.log("Valuess",values);
    setShowProject(values);
  }
  return (
    <div className='nav-header-lap'>
        <div className="scrolling-text-container" 
            onMouseOver={() => {
              setShowProjectsDropdown(false)
            }}>
          <div className="scrolling-text">
            🚀 ENQUIRE NOW FOR A FREE SITE VISIT - +91 89395 893889 🏡
          </div>
        </div>
        <div>
            <div className="nav-main-container white-bg py-3 px-2">
                <div href="#" className="nav-header-logo" onMouseOver={() => {setShowProjectsDropdown(false)}}>
                  <a className="navbar-brand" href="/">
                      <img
                      className='home-logo-out'
                      src={anandham_logo}      
                      alt="Anandhamplots Logo"       
                      />
                  </a>
                </div>              
                <div className="nav-header-content">
                  <Nav className='nav-container'>
                      <Nav.Link href="/" className="nav-header-text px-3" 
                      onMouseOver={() => {
                        setShowProjectsDropdown(false)
                      }}
                      >Home</Nav.Link>
                      <Nav.Link href="/aboutus" className="nav-header-text px-3" 
                      onMouseOver={() => {
                        setShowProjectsDropdown(false)
                      }}
                      >About Us</Nav.Link>
                      <div
                        className="nav-project-wrapper"
                        onMouseOver={() => {
                          setShowProjectsDropdown(true)
                        }}
                        
                      >
                        <Nav.Link href="#" className="nav-header-text px-3" onClick={() => { setShowProjectsDropdown(!showProjectsDropdown)}}>Projects</Nav.Link>
                        {showProjectsDropdown && (
                          <div className="project-dropdown shadow" 
                          onMouseLeave={() => {
                            setShowProjectsDropdown(false)
                          }}
                          >
                            {/* Column 1 - Image */}
                            <Col md={3} xs={12} className="mb-3 mb-md-0">
                              <div className='project-image-div'>
                                {showProject === "Padappai" ?
                                <img src={Padappai} alt={`Project-${showProject}`} className="project-image" />
                                :
                                showProject === "Kanchipuram" ?
                                <img src={Kanchipuram} alt={`Project-${showProject}`} className="project-image" />
                                :
                                <img src={Redhills} alt={`Project-${showProject}`} className="project-image" />
                                }
                              </div>
                            </Col>

                            {/* Column 2 - Buttons */}
                            <Col md={3} xs={12} className="mb-3 mb-md-0 project-column">
                              <div className='project-column-btns'>
                                <CustomButton
                                  title="Completed Projects"
                                  value={"Padappai"}
                                  textcolor={showProject === "Padappai" ? "light" : "btn"}
                                  btnBg={showProject === "Padappai" ? "green" : "white"}
                                  textWeight={700}
                                  btnMinWidth="10rem"
                                  btnBorderRadius="5px"
                                  // btnMarg={"1rem"}
                                  handleClick={handleProjectClick}
                                />
                                <br/>
                                <CustomButton
                                  title="Ongoing Projects"
                                  value={"Kanchipuram"}
                                  textcolor={showProject === "Kanchipuram" ? "light" : "btn"}
                                  btnBg={showProject === "Kanchipuram" ? "green" : "white"}
                                  textWeight={700}
                                  btnMinWidth="10rem"
                                  btnBorderRadius="5px"
                                  // btnMarg={"1rem"}
                                  handleClick={handleProjectClick}
                                />
                                <br/>
                                <CustomButton
                                  title="Upcoming Projects"
                                  value={"Redhills"}
                                  textcolor={showProject === "Redhills" ? "light" : "btn"}
                                  btnBg={showProject === "Redhills" ? "green" : "white"}
                                  textWeight={700}
                                  btnMinWidth="10rem"
                                  btnBorderRadius="5px"
                                  // btnMarg={"1rem"}
                                  handleClick={handleProjectClick}
                                />
                              </div>        
                              
                            </Col>

                            {/* Column 3 - Heading */}
                            <Col md={2} xs={12} className="mb-3 mb-md-0 project-column">
                              {showProject === "Padappai" ?
                                  <div className='project-column-content'>
                                    <h5 className='green-text'>Featured Projects</h5>
                                    <p>Explore our latest and most exciting developments.</p>
                                    <h4 className='green-text'><b>PADAPPAI</b></h4>
                                    <a className="cursor-pointer" href="/padappai">Explore More</a>
                                  </div>
                                  : showProject === "Kanchipuram" ?
                                  <div className='project-column-content'>
                                    <h5 className='green-text'>Featured Projects</h5>
                                    <p>Explore our latest and most exciting developments.</p>
                                    <h4 className='green-text'><b>KANCHIPURAM</b></h4>
                                    <a className="cursor-pointer" href="/kanchipuram">Explore More</a>
                                  </div>
                                  :
                                  <div className='project-column-content'>
                                    <h5 className='green-text'>Featured Projects</h5>
                                    <p>Explore our latest and most exciting developments.</p>
                                    <h4 className='green-text'><b>REDHILS</b></h4>
                                    <a className="cursor-pointer" href="/redhills">Explore More</a>
                                  </div>
                                }
                            </Col>

                            {/* Column 4 - Visit Button */}
                            <Col className="project-column" md={3} xs={12}>
                              <div className='project-column-site'>
                                <Row>
                                  {showProject === "Padappai" ?
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14078.526685138102!2d80.0330963!3d12.8871589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7edcddad8af%3A0xaab3ad23b3682db0!2sRaunaq%20Foundations%20-%20Anandham%20-%20Plots%20in%20Padappai!5e1!3m2!1sen!2sin!4v1755963532322!5m2!1sen!2sin" 
                                    height="200" width="60%" style={{"border":"0"}} 
                                    allowfullscreen="" loading="lazy"
                                    title="Padappai" 
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    :
                                    showProject === "Kanchipuram" ?
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14080.572558071908!2d79.7111061!3d12.8507169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c3df1806e2c3%3A0x21754d7d64da3ca1!2sAnandham%20Plots%20-%20Konnerikuppam!5e1!3m2!1sen!2sin!4v1755963456686!5m2!1sen!2sin"
                                     height="200" width="60%" style={{"border":"0"}} 
                                     allowfullscreen="" loading="lazy" 
                                     title="Kanchipuram"
                                     referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    :
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14058.496318192152!2d80.1564884!3d13.2387403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527de145ef4935%3A0xccfd18f693baecf2!2sAnandham%20Plots%20-%20Sholavaram!5e1!3m2!1sen!2sin!4v1755963347522!5m2!1sen!2sin"
                                    height="200" width="60%" style={{"border":"0"}}  
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    title="Sholavaram"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                                  }
                                </Row>
                                {/* <Row>
                                {showProject === "Padappai" ? 
                                  <a href="/projects" className="">Visit Site</a>
                                  :showProject === "Kanchipuram" ?
                                  <a href="/projects" className="">Visit Site</a>
                                  :
                                  <a href="/projects" className="">Visit Site</a>
                                }
                                </Row> */}
                              </div>
                            </Col>
                          </div>
                        )}
                      </div>

                      <Nav.Link href="/blogs" className="nav-header-text px-3" 
                      onMouseOver={() => {
                        setShowProjectsDropdown(false)
                      }}
                      >Blogs</Nav.Link>
                      
                      {/* <Nav.Link href="/padappai" className="nav-header-text px-3"
                      onMouseOver={() => {
                        setShowProjectsDropdown(false)
                      }}
                      >Core team</Nav.Link>
                      <Nav.Link href="/padappai" className="nav-header-text px-3"
                      onMouseOver={() => {
                        setShowProjectsDropdown(false)
                      }}
                      >Seller spot</Nav.Link>
                      <Nav.Link href="/padappai" className="nav-header-text px-3"
                      onMouseOver={() => {
                        setShowProjectsDropdown(false)
                      }}
                      >Careers</Nav.Link> */}
                      <Nav.Link href="/contactus" className="nav-header-text px-3"
                      onMouseOver={() => {
                        setShowProjectsDropdown(false)
                      }}
                      >Contact Us</Nav.Link>                      
                  </Nav>
                  <button
                      className="navbar-toggler toggle-btn"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                      aria-controls="offcanvasNavbar"
                  >
                      <span className="navbar-toggler-icon">                            
                      </span>
                  </button>
                </div> 
                {/* Off-canvas menu */}
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                    <div>
                        <img
                        className='home-logo'
                        src={anandham_logo}      
                        alt="Anandhamplots Logo"       
                        />
                    </div>
                    <button
                        type="button"
                        className="btn-close closebtn"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    > <FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    
                    <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                          <div className='mobileview-nav'><FontAwesomeIcon icon={faHouse} /> <a className={`nav-link`} href="/">Home</a></div>
                        </li>
                        <li className="nav-item">
                        <div className='mobileview-nav'><FontAwesomeIcon icon={faBook} /> <a className={`nav-link `}  href="about">About Us</a></div>
                        </li>
                        {/* Projects with dropdown */}
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="collapse"
                            href="#projectsSubmenu"
                            role="button"
                            aria-expanded="false"
                            aria-controls="projectsSubmenu"
                          >
                            <div className='mobileview-nav'><FontAwesomeIcon icon={faBriefcase} /> Projects <FontAwesomeIcon icon={faCaretDown} /></div>
                          </a>

                          {/* Submenu (hidden by default) */}
                          <div className="collapse" id="projectsSubmenu">
                            <ul className="list-unstyled ms-3">
                              <li>
                              <div className='mobileview-nav'><FontAwesomeIcon icon={faHourglassEnd} /><a className="nav-link" href="projects/web">Completed Projects</a></div>
                              </li>
                              <li>
                              <div className='mobileview-nav'><FontAwesomeIcon icon={faHourglassHalf} /><a className="nav-link" href="projects/mobile">Ongoing Projects</a></div>
                              </li>
                              <li>
                              <div className='mobileview-nav'> <FontAwesomeIcon icon={faHourglassStart} /> <a className="nav-link" href="projects/ai">Upcoming Projects</a></div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                        <div className='mobileview-nav'> <FontAwesomeIcon icon={faBook} /><a className={`nav-link `}  href="blogs">Blogs</a> </div>
                        </li>
                        {/* <li className="nav-item">
                          <a className={`nav-link `}  href="coreteam">Core Team</a>
                        </li>
                        <li className="nav-item">
                          <a className={`nav-link `}  href="sellerspot">Seller Spot</a>
                        </li>
                        <li className="nav-item">
                          <a className={`nav-link `}  href="careers">Careers</a>
                        </li> */}
                        <li className="nav-item">
                        <div className='mobileview-nav'><FontAwesomeIcon icon={faPhone} /> <a className={`nav-link`} href="contact">Contact</a></div>
                        </li>
                      </ul>
                    </div>
                </div>           
            </div> 
        </div>
    </div>
  );
}
