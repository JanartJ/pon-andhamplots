import React from 'react'
import HomeBanner from "../../assets/images/kanchi_banner1.jpeg"; 
import Banner from '../../components/header/banner';
import KanchiLocation from './locationKanchi';
import KanchiFeature from './kanchiFeature';

import location from "../../assets/icons/features/location.png";
import hand from "../../assets/icons/features/hand.png";
import legal from "../../assets/icons/features/legal.png";
import money from "../../assets/icons/features/money.png";
import school from "../../assets/icons/features/school.png";
import water from "../../assets/icons/features/water.png";
import AboutKanchi  from "../../assets/images/card2.jpeg";
import "./kanchi.css";
import { PlotsAdvantages } from '../../components/plots/plots';
import SliderVideo from '../../components/sliders/vsliders';
import { DownloadBroucher } from '../../components/download_brocher/download_brocher';

/**
* @author
* @function Kanchi
**/

export const Kanchi = (props) => {

  const featureDetails =[
    {
        "id":1,
        "imgSrc":location,
        "imgText":"location",
        "title":"Just next to Konnerikuppum."
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
        "title":"Just next to Konnerikuppum."
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
        <Whykanchi/>
        <h2 className='kanchi-features-heading green-text heading-bold'>Features at Anandhamplots</h2>
        <KanchiFeature details={featureDetails}/>
        <h2 className='kanchi-features-heading green-text heading-bold'>Promising Locations</h2>
        <KanchiLocation/>
        <PlotsAdvantages/>
        <SliderVideo/>
    </div>    
   )
  }

const Whykanchi = ()=>{
    return(
        <div className='why-kanchi'>
            <img src={AboutKanchi} alt="About Kanchi"/>
            <div className='kanchi-why-content'>
                <h4 >Why Anandham Kanchipuram?</h4>
                <p>Kanchipuram is renowned for its rich cultural heritage and burgeoning infrastructure. Here, buying residential plots for sale in Kanchipuram presents a lucrative investment opportunity for several compelling reasons.</p>
                <p>This historic city, located just a short drive from Chennai, combines the allure of traditional charm with the benefits of modern living. Investing in Kanchipuram means more than just acquiring property; it’s about becoming part of an excellent residential community.</p>
                <div className='kanchi-broucher-btn-div'><DownloadBroucher/></div> 
            </div>
        </div>
    )
}
