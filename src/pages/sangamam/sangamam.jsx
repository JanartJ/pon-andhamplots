import React from 'react'
import HomeBanner from "../../assets/images/sangamam_banner.jpeg"; 
import Banner from '../../components/header/banner';
import SangamamLocation from './locationsangamam';
import SangamamFeature from './sangamamFeature';

import location from "../../assets/icons/features/location.png";
import hand from "../../assets/icons/features/hand.png";
import legal from "../../assets/icons/features/legal.png";
import money from "../../assets/icons/features/money.png";
import school from "../../assets/icons/features/school.png";
import water from "../../assets/icons/features/water.png";
import Aboutsangamam  from "../../assets/images/card4.jpeg";
import "./sangamam.css";
import { PlotsAdvantages } from '../../components/plots/plots';
import SliderVideo from '../../components/sliders/vsliders';
import { DownloadBroucher } from '../../components/download_brocher/download_brocher';

/**
* @author
* @function sangamam
**/

export const Sangamam = (props) => {

  const featureDetails =[
    {
        "id":1,
        "imgSrc":location,
        "imgText":"location",
        "title":"Located in sangamam."
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
        "title":"Located in sangamam."
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
        <Whysangamam/>
        <h2 className='sangamam-features-heading green-text heading-bold'>Features at Anandhamplots</h2>
        <SangamamFeature details={featureDetails}/>
        <h2 className='sangamam-features-heading green-text heading-bold'>Promising Locations</h2>
        <SangamamLocation/>
        <PlotsAdvantages/>
        <SliderVideo/>
    </div>    
   )
  }

const Whysangamam = ()=>{
    return(
        <div className='why-sangamam'>
            <img src={Aboutsangamam} alt="About sangamam"/>
            <div className='sangamam-why-content'>
                <h4 >Why Anandham sangamam?</h4>
                <p>Welcome to Anandham Sangamam, a series of well-developed villa plots off OMR on the Thiruporur-Chengalpet 4-lane national highway.</p>
                <p>This project promises rapid appreciation of land prices, that makes it a great investment opportunity. 
                    It is situated near the 1450-acre Japanese industrial township - One Hub, housing companies such as Yamaha and Hitachi. 
                    If you are looking to buy a piece of heaven, this is the project with perfect location and thoughtful amenities, which makes Sangamam an investment that will make you smile.
                </p>
                <p>At Akshaya Sangamam, everything you need is thoughtfully brought together in one place to ensure a comfortable and secure living experience. The project features a grand entrance arch, well-planned walkways and pathways, and dedicated public utility areas for everyday convenience. Efficient infrastructure such as saucer drains for stormwater management, a reliable water supply for each plot, and well-paved 60- and 40-foot-wide tree-lined roads enhance both functionality and aesthetics. Safety and transparency are prioritized with CCTV surveillance, LED street lighting, clear title assurance, and well-marked street signages. Adding to the charm are beautifully landscaped gardens, parks, and a children’s play area, creating a peaceful and family-friendly environment.</p>
                <p>There’s no place like Anandham Sangamam!</p>
                <div className='sangamam-broucher-btn-div'><DownloadBroucher/></div> 
            </div>
        </div>
    )
}
