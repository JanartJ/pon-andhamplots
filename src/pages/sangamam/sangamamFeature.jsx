import React from 'react';
import "./sangamamFeatureStyle.css";


const SangamamFeature = ({details}) => {
  return(
    
    <div class="sangamam-feature-container">
      <div class="scrolling-images">
        {
            details && details.map((data,ind)=>{
                return(
                    <div key={data.id} className="sangamam-feature-incontainer">
                        <img src={data.imgSrc} alt={data.imgText}/>
                        <div className="featurediv"><h6>{data.title}</h6></div>
                    </div>
                )
            })
        }    
        </div>
    </div>
   )
  }

export default SangamamFeature;