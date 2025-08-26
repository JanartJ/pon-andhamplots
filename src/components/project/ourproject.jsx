import React from 'react';
import "./ourproject.css";
import Card1 from "../../assets/images/card1.jpeg";
import Card2 from "../../assets/images/card2.jpeg";
import Card3 from "../../assets/images/card3.jpeg";
import CustomButton from '../shared/button/button';

/**
* @author Janarthanan
* @function OurProjects
**/

const OurProjects = () => {
    const handleProjectClick = (val)=>{        
        window.location.href=val.toLowerCase();        
    }
    const cardDetails = [
        {
            "cardTitle":"Completed Projects",
            "cardLocation":"Padappai",
            "cardImg":Card1
        },
        {
            "cardTitle":"Ongoing Projects",
            "cardLocation":"Kanchipuram",
            "cardImg":Card2
        },
        {
            "cardTitle":"Upcoming Projects",
            "cardLocation":"Sholavaram",
            "cardImg":Card3
        }
    ]
  return(
    <div className='our-project-main-container'>
        <h1 className='our-project-heading green-text text-center'>Our Projects</h1>
        <div className='our-project-card-container'>
            {cardDetails && cardDetails.map((data,ind)=>{
                return(
                    <ProjectCard keyValue={ind} cardTitle={data.cardTitle} cardImg={data.cardImg} cardLocation={data.cardLocation} handleProjectBtnClick={handleProjectClick}/>
                )
            })}
        </div>
    </div>
   )
  }


const ProjectCard = ({keyValue,cardTitle,cardImg,cardLocation,handleProjectBtnClick}) =>{
    return(
        <>
            <div key={keyValue} className='each-project-card-container'>
                <img src={cardImg} alt={`banner${cardTitle}`}/>
                <h3 className='p-3'>{cardTitle}</h3>
                <h5><b>{cardLocation}</b></h5>
                <div className='our-project-btn-div'>
                    <CustomButton
                        title={"Know more"}
                        value={cardLocation}
                        textcolor={"light"}
                        btnBg={"green"}
                        textWeight={700}
                        btnMinWidth={"10rem"}
                        btnBorderRadius={"20px"}
                        handleClick={handleProjectBtnClick}
                    />
                </div>
            </div>
        </>
    )
}

export default OurProjects;