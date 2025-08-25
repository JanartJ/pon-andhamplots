import React from 'react'
import HomeBanner from "../../assets/images/sholavaram_banner1.jpeg"; 
import Banner from '../../components/header/banner';
// import SholavaramLocation from './locationsholavaram';
import SholavaramFeature from './sholavaramFeature';

import location from "../../assets/icons/features/location.png";
import hand from "../../assets/icons/features/hand.png";
import legal from "../../assets/icons/features/legal.png";
import money from "../../assets/icons/features/money.png";
import school from "../../assets/icons/features/school.png";
import water from "../../assets/icons/features/water.png";
import Aboutsholavaram  from "../../assets/images/card3.jpg";
import "./sholavaram.css";
import { PlotsAdvantages } from '../../components/plots/plots';
import SliderVideo from '../../components/sliders/vsliders';
import { DownloadBroucher } from '../../components/download_brocher/download_brocher';

/**
* @author
* @function sholavaram
**/

export const Sholavaram = (props) => {

  const featureDetails =[
    {
        "id":1,
        "imgSrc":location,
        "imgText":"location",
        "title":"Located in Sholavaram."
    },
    {
        "id":2,
        "imgSrc":hand,
        "imgText":"hand",
        "title":"High appreication potential."
    },
    {
        "id":3,
        "imgSrc":legal,
        "imgText":"legal",
        "title":"Legal and title documents are clear hassle free transactions."
    },
    {
        "id":4,
        "imgSrc":money,
        "imgText":"money",
        "title":"Best in segment pricing for ready to construct plots."
    },
    {
        "id":5,
        "imgSrc":water,
        "imgText":"water",
        "title":"Potable groundwater."
    },
    {
        "id":6,
        "imgSrc":school,
        "imgText":"school",
        "title":"Surrounded by schools, colleges and all essentials."
    },
    {
        "id":11,
        "imgSrc":location,
        "imgText":"location",
        "title":"Located in Sholavaram."
    },
    {
        "id":12,
        "imgSrc":hand,
        "imgText":"hand",
        "title":"High appreication potential."
    },
    {
        "id":13,
        "imgSrc":legal,
        "imgText":"legal",
        "title":"Legal and title documents are clear hassle free transactions."
    },
    {
        "id":14,
        "imgSrc":money,
        "imgText":"money",
        "title":"Best in segment pricing for ready to construct plots."
    },
    {
        "id":15,
        "imgSrc":water,
        "imgText":"water",
        "title":"Potable groundwater."
    },
    {
        "id":16,
        "imgSrc":school,
        "imgText":"school",
        "title":"Surrounded by schools, colleges and all essentials."
    }
  ]  
  return(
    <div>
        <Banner bannerImgSrc={HomeBanner}/>
        <Whysholavaram/>
        <h2 className='sholavaram-features-heading green-text heading-bold'>Features at Anandham</h2>
        <SholavaramFeature details={featureDetails}/>
        {/* <h2 className='sholavaram-features-heading green-text heading-bold'>Promising Locations</h2> */}
        {/* <SholavaramLocation/> */}
        <PlotsAdvantages/>
        <SliderVideo/>
    </div>    
   )
  }

const Whysholavaram = ()=>{
    return(
        <div className='why-sholavaram'>
            <img src={Aboutsholavaram} alt="About sholavaram"/>
            <div className='sholavaram-why-content'>
                <h4 >Why Anandham Sholavaram?</h4>
                <p>Anandham at Sholavaram, is an established neighbourhood with a peaceful environment and high potential for investment. Strategically positioned near to sholavarampuram city, the region boasts of good infrastructure including transportation, workspaces, educational institutions etc.</p>
                <div className='sholavaram-broucher-btn-div'><DownloadBroucher/></div> 
            </div>
        </div>
    )
}
