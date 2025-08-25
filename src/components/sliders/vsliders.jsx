import React,{useState} from 'react';
import "./vsliders.css";
import RightArrow from "../../assets/icons/rightarrow.png";
import LeftArrow from "../../assets/icons/leftarrow.png";

/**
* @author Janarthanan
* @function SliderVideo
**/

const videos = [ "g3hOy6t-Lbc",  "g3hOy6t-Lbc",  "g3hOy6t-Lbc"];

const SliderVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // start center

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const getVisibleSlides = () => {
    const total = videos.length;
    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;
    return [left, currentIndex, right];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className='our-projects-site'>
      <h2 className='light-text text-center heading-bold our-sites-heading'>About Our Sites</h2>      
      <div className="slider-container">
        <img src={LeftArrow} alt="left-arrow" className="arrow arrow-left" onClick={()=>prevSlide()}/>
        <div className="slider-track">
          {visibleSlides.map((i) => (
            <div
              key={i}
              className={`slide ${i === currentIndex ? "active" : ""}`}
            >
              <iframe 
                  className="video"
                  src={`https://www.youtube.com/embed/${videos[i]}?controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=0`} 
                  title="Client Testimonial" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>                    
              </iframe>
            </div>
          ))}
        </div>
        <img src={RightArrow} alt="right-arrow" className="arrow arrow-right" onClick={()=>nextSlide()}/>   
      </div>
    </div>
  );
};

export default SliderVideo;