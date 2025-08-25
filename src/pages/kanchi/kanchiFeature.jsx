import React from 'react';
import "./kanchiFeatureStyle.css";


const KanchiFeature = ({details}) => {
  return(
    
    <div class="kanchi-feature-container">
      <div class="scrolling-images">
        {
            details && details.map((data,ind)=>{
                return(
                    <div key={data.id} className="kanchi-feature-incontainer">
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

export default KanchiFeature;