import React from "react";
import LazyLoad from "react-lazyload";
import classes from "./InstaFooter.module.css";
import banner1 from "../../assessts/images/banner1.jpg";
import banner2 from "../../assessts/images/banner2.jpg";
import banner3 from "../../assessts/images/banner3.jpg";
import banner4 from "../../assessts/images/banner4.jpg";
import banner5 from "../../assessts/images/banner5.jpg";
import banner6 from "../../assessts/images/banner6.jpg";
import banner7 from "../../assessts/images/banner7.jpg";
import banner8 from "../../assessts/images/banner8.jpg";

const InstaFooter = () => {
  return (
    <div className={`${classes.InstaFooter}`}>
      <div className={`${classes.ImageContainer}`}>
        <img src={banner1} alt="img" />
      </div>
      <div className={`${classes.ImageContainer}`}>
        <img src={banner2} alt="img" />
      </div>
      <div className={`${classes.ImageContainer}`}>
        <img src={banner3} alt="img" />
      </div>
      <div className={`${classes.ImageContainer}`}>
        <img src={banner4} alt="img" />
      </div>
      <div className={`${classes.ImageContainer}`}>
        <img src={banner5} alt="img" />
      </div>
      <div className={`${classes.ImageContainer}`}>
        <img src={banner6} alt="img" />
      </div>
      <div className={`${classes.ImageContainer}`}>
        <img src={banner7} alt="img" />
      </div>
      <div className={`${classes.ImageContainer}`}>
        <img src={banner8} alt="img" />
      </div>


      <div className={`${classes.InstaLink}`}>

        <p>View Our Instagram</p>

      </div>
    </div>
   
  );
};

export default InstaFooter;
