import React from "react";
import banner from "../images/banner.jpg";
import { Carousel } from 'react-bootstrap'
// import Typewriter from "react-simple-typewriter";
// // import "react-simple-type-writer/dist/index.css";
import "../StyleSheet/Banner.css";
const Banner = () => {
  return (
    <div className="Banner__container">
    <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner}
      alt="First slide"
      style={{width:'100%', height:'90vh', fontFamily:'Montserrat'}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner}
      alt="Second slide"
      style={{width:'100%', height:'90vh'}}
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner}
      alt="Third slide"
      style={{width:'100%', height:'90vh'}}
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    // <div className="Banner__container">
    //   <img src={banner} alt="Banner"/>
    //   <div className="text-on-image">
    //     Find your Hostel.
    //   </div>
    //   </div>
  );
};




export default Banner;