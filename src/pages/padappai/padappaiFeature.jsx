import React from 'react';
import "./padappaiFeatureStyle.css";


const PadappaiFeature = ({details}) => {
  return(
    
    <div class="padappai-feature-container">
      <div class="scrolling-images">
        {
            details && details.map((data,ind)=>{
                return(
                    <div key={data.id} className="padappai-feature-incontainer">
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

export default PadappaiFeature;