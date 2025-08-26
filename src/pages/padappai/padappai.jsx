import React from 'react'
import HomeBanner from "../../assets/images/padappai_banner1.jpeg"; 
import Banner from '../../components/header/banner';
import PadappaiLocation from './locationpadappai';
import PadappaiFeature from './padappaiFeature';

import location from "../../assets/icons/features/location.png";
import hand from "../../assets/icons/features/hand.png";
import legal from "../../assets/icons/features/legal.png";
import money from "../../assets/icons/features/money.png";
import school from "../../assets/icons/features/school.png";
import water from "../../assets/icons/features/water.png";
import Aboutpadappai  from "../../assets/images/card1.jpeg";
import "./padappai.css";
import { PlotsAdvantages } from '../../components/plots/plots';
import SliderVideo from '../../components/sliders/vsliders';
import { DownloadBroucher } from '../../components/download_brocher/download_brocher';

/**
* @author
* @function padappai
**/

export const Padappai = (props) => {

  const featureDetails =[
    {
        "id":1,
        "imgSrc":location,
        "imgText":"location",
        "title":"Located in Padappai."
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
        "title":"Located in Padappai."
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
        <Whypadappai/>
        <h2 className='padappai-features-heading green-text heading-bold'>Features at Anandhamplots</h2>
        <PadappaiFeature details={featureDetails}/>
        <h2 className='padappai-features-heading green-text heading-bold'>Promising Locations</h2>
        <PadappaiLocation/>
        <PlotsAdvantages/>
        <SliderVideo/>
    </div>    
   )
  }

const Whypadappai = ()=>{
    return(
        <div className='why-padappai'>
            <img src={Aboutpadappai} alt="About padappai"/>
            <div className='padappai-why-content'>
                <h4 >Why Anandham padappai?</h4>
                <p>A environment of exclusive and affordable plots in padappai</p>
                <p>Anandham spans a generous 2.1 acres, offering a remarkable opportunity for both development and investment. Located along the bustling Tambaram – Mudichur – Oragadam Road near Padappai, next to the prestigious Alwin International School, this land enjoys a strategic and highly desirable position.</p>
                <p>The project comprises 60 plots, ideal for residential or commercial use, making it an appealing choice for investors and developers eager to tap into the area’s expanding prospects. With easy access to essential amenities, schools and residential complexes, Anandham.
                </p>
                <p>Serves as a promising foundation for diverse ventures. Whether for residential, commercial, or mixed-use purposes, this plot holds significant potential to foster a vibrant and thriving residential plots in padappai.</p>
                <div className='padappai-broucher-btn-div'><DownloadBroucher/></div> 
            </div>
        </div>
    )
}
