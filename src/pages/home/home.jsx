import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import OurProjects from "../../components/project/ourproject";
import { PlotsAdvantages } from "../../components/plots/plots";
import SliderVideo from "../../components/sliders/vsliders";

import ProjectTabs from "../../components/project_tabs/projectTab";
import Banner from "../../components/header/banner";
import HomeBanner from "../../assets/images/home_banner1.jpeg"; 


export default function HomePage() {
  return (
    <div>
        <Banner bannerImgSrc={HomeBanner}/>
        <OurProjects/>
        <PlotsAdvantages/>
        <SliderVideo/>
        <ProjectTabs/>        
    </div>
  );
}
