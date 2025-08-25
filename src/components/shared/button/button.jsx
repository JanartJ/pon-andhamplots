import React from 'react'

/**
* @author JJ
* @function For shared button component
**/



const CustomButton = ({textcolor,btnBg,btnPad="0.5rem",textAlignment="center",btnWidth="100%",btnMarg="0px",btnMinWidth="15rem",textWeight=500,btnBorderRadius="5px",title="",value="",handleClick}) => {


    
  return(
    <>
        <button
            className={`btn ${textcolor}-text ${btnBg}-bg`}
            style={{
                textAlign:`${textAlignment}`,
                padding:`${btnPad}`,
                margin:`${btnMarg}`,
                fontWeight:`${textWeight}`,
                borderRadius:`${btnBorderRadius}`,
                minWidth:`${btnMinWidth}`,
                width:`${btnWidth}`
            }}
            onClick={()=>handleClick(value)}
        >
            {title}
        </button>
    </>
   )
  }

export default CustomButton;