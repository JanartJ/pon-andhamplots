import React from 'react';
import affordrate from "../../assets/icons/plots/affordrate.svg";
import airport from "../../assets/icons/plots/airport.svg";
import construction from "../../assets/icons/plots/construction.svg";
import groundwater from "../../assets/icons/plots/groundwater.svg";
import mortgage from "../../assets/icons/plots/mortgage.svg";
import neighborhood from "../../assets/icons/plots/neighborhood.svg";
import publics from "../../assets/icons/plots/publics.svg";
import ringroad from "../../assets/icons/plots/ringroad.svg";
import "./plots.css";

/**
* @author Janarthanan
* @function PlotsAdvantages
**/

export const PlotsAdvantages = (props) => {
  const plotsList = [
    {
      "id": 1,
      "imgSrc":affordrate,
      "content":"Affordable Rates"
    },
    {
      "id": 2,
      "imgSrc":airport,
      "content":"Close to Airport, Hospitals, Entertainment, Religious Centers, etc."
    },
    {
      "id": 3,
      "imgSrc":construction,
      "content":"Ready to Construction"
    },
    {
      "id": 4,
      "imgSrc":groundwater,
      "content":"Abundant Groundwater"
    },
    {
      "id": 5,
      "imgSrc":mortgage,
      "content":"Mortgage-free Property"
    },
    {
      "id": 6,
      "imgSrc":neighborhood,
      "content":"Secure neighborhood"
    },
    {
      "id": 7,
      "imgSrc":publics,
      "content":"Easy Access to Public transport"
    },
    {
      "id": 8,
      "imgSrc":ringroad,
      "content":"Easy connectivity to Inner ring road & Outer ring road"
    }
  ]
  return(
    <div className='plots-main-container'>
     <div>
        <h2 className='text-center green-text'>Plot Advantages</h2>
        <p className='text-center'>At Anandham, our plots in padappai offer a perfect combination of natural beauty
        and modern amenities which enhances your lifestyle.</p>
     </div>
      <div className="card-grid">
        {plotsList.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} alt={card.content} className="card-image" />
            <h3 className="card-title footer-text">{card.content}</h3>
          </div>
        ))}
      </div>
    </div>
   )
  }
