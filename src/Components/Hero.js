import React from "react";
import "../Style/hero.css";
import arrow from "../Images/Group 212.svg";

const Hero = ({data}) => {
  return (
    <>
      <div className={`hero ${data.style ?? data.style}`}>
        <div className="contentbox">
          <h2 className={` ${data.style2 ?? data.style2}`}>{data.title}</h2>
          <p className={` ${data.style2 ?? data.style2}`}>
           {data.description}
          </p>
          <div className="herobtn">
            <button>
              {data.buttonText} <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="emptybox">
           {data.imageUrl && <img src={data.imageUrl} alt="" />}
        </div>
      </div>

      
    </>
  );
};

export default Hero;
