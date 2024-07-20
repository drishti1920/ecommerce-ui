import React, { useEffect, useRef, useState } from "react";
import classes from "./ProductDetail.module.css";
import exampleImage from "../../assessts/images/candle1.jpg";
import exampleImage2 from "../../assessts/images/candle2.jpg";
import exampleImage3 from "../../assessts/images/candle3.jpg";


const ProductDetail = () => {
  // const sliderRef = useRef(null);
  // const [images, setImages] = useState([
  //   { url: exampleImage },
  //   { url: exampleImage2 },
  //   { url: exampleImage3 },
  //   { url: exampleImage },
  //   { url: exampleImage3 },
  // ]);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const container = sliderRef.current;
  //   const imageHeight = container.offsetHeight / images.length;
  //   container.scrollTop = currentIndex * imageHeight;
  // }, [currentIndex]);

  // const handleThumbnailClick = (index) => {
  //   setCurrentIndex(index);
  //   const container = sliderRef.current;
  //   const imageHeight = container.offsetHeight / images.length;
  //   container.scrollTop = index * imageHeight;
  // };

  // const handleImageSliderScroll = () => {
  //   const container = sliderRef.current;
  //   const imageHeight = container.offsetHeight / images.length;
  //   const newIndex = Math.round(container.scrollTop / imageHeight);
  //   setCurrentIndex(newIndex);
  // };

  const images = [
    { id: 1, url: exampleImage },
    { id: 2, url: exampleImage2 },
    { id: 3, url: exampleImage3 },
    { id: 4, url: exampleImage }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    // <div className={`${classes.productDetailPage}`}>
    //   <div className={`${classes.sliderContainer}`}>
    //   <div className={`${classes.thumbnailContainer}`}>
    //       {images.map((image, index) => (
    //         <div
    //           key={index}
    //           className={`${classes.thumbnail} ${
    //             index === currentIndex ? classes.activeThumbnail : ""
    //           }`}
    //           style={{ backgroundImage: `url(${image.url})` }}
    //           onClick={() => handleThumbnailClick(index)}
    //         />
    //       ))}
    //     </div>


    //     <div
    //       className={`${classes.imageSlider}`}
    //       ref={sliderRef}
    //       onScroll={handleImageSliderScroll}
    //     >
    //       {images.map((image, index) => (
    //         <img
    //           key={index}
    //           src={image.url}
    //           alt={`img${index}`}
    //           className={`${classes.image} ${
    //             index === currentIndex ? classes.activeImage : ""
    //           }`}
    //         />
    //       ))}
    //     </div>

    //     <div className={`${classes.ProductText}`}>
    //       <h2>Bare Allure</h2>
    //       <p>₹1500.00</p>
    //       <div className={`${classes.ButtonsCon}`}>
    //         <button className={`${classes.CartButton}`}>ADD TO CART</button>
    //         <button className={`${classes.BuyButton}`}>BUY NOW</button>
    //       </div>
    //       <p>
    //         Bare Allure is our most seductive bougie parfumée yet, with an
    //         evocative musk base infused with lingering notes of creamy-sweet
    //         vanilla and encased in a suave metallic jar. Stay bare. Notes: Musk
    //         and Vanilla Style: Sensual and Romantic Net Weight: 180 gm / 6.3 oz
    //         Burn Time: ≈ 30 hours. Made in India with fine quality essential
    //         oils Traditional wax blend that burns clean and lasts long Unique
    //         fragrances with a balanced throw Premium jars and packaging. Free
    //         shipping on orders above Rs. 1000. Cash on delivery available.
    //         Expected delivery within 4-5 days. For urgent deliveries, call +91
    //         62323 62323
    //       </p>
    //     </div>
    //   </div>
    // </div>


    <div className={classes.productDetailContainer}>
  <div className={classes.ImageConatiner}>
    <div className={classes.thumbnailContainer}>
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`${classes.thumbnail} ${
            index === currentImageIndex ? classes.active : ""
          }`}
          onClick={() => handleThumbnailClick(index)}
        >
          <img
            src={image.url}
            alt={`Thumbnail ${index + 1}`}
            className={classes.thumbnailImage}
          />
        </div>
      ))}
    </div>
    <div className={classes.imageContainer}>
      <img
        src={images[currentImageIndex].url}
        alt={`Product ${currentImageIndex + 1}`}
        className={classes.mainImage}
      />
    </div>

    </div>
    <div className={classes.productDetails}>
      <h2>Bare Allure</h2>
      <p className={classes.price}>₹1500.00</p>
      <div className={classes.buttonsContainer}>
        <button className={classes.addToCartButton}>ADD TO CART</button>
        <button className={classes.buyNowButton}>BUY NOW</button>
      </div>
      <p className={classes.description}>
        Bare Allure is our most seductive bougie parfumée yet, with an
        evocative musk base infused with lingering notes of creamy-sweet
        vanilla and encased in a suave metallic jar. Stay bare.
      </p>
      <ul className={classes.productFeatures}>
        <li>Notes: Musk and Vanilla</li>
        <li>Style: Sensual and Romantic</li>
        <li>Net Weight: 180 gm / 6.3 oz</li>
        <li>Burn Time: ≈ 30 hours</li>
        <li>Made in India with fine quality essential oils</li>
      </ul>
    </div>
  </div>


  );
};



export default ProductDetail;
