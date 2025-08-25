import React from 'react'
import CustomButton from '../shared/button/button'
import './address.css';

/**
* @author
* @function Location
**/

const Location = (props) => {
    const handleBtnClick = ()=>{
        window.open("https://maps.app.goo.gl/niEPqFCMe8fvcokf6", "_blank")
    }
  return(
    <div className='location-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.346996892344!2d80.00628995973936!3d12.886054797473346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f6a73b417dc1%3A0x9765b1ff62b9c3e1!2sPadappai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722248269796!5m2!1sen!2sin" 
        className="map-container" title="padappai_location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <br/><br/>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center",width:"10rem",margin:"auto"}}>
            <CustomButton
                title={"Site Visit"}
                textcolor={"light"}
                btnBg={"green"}
                textWeight={700}
                btnMinWidth={"10rem"}
                btnBorderRadius={"20px"}
                handleClick={handleBtnClick}
            />
        </div>
    </div>
   )
  }


  export default Location;