import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { houseOnSaleFetch } from "../store/Actions/housesFetch";
import screenLoader from "../images/screenLoad.gif";
import "../StyleSheet/HouseListed.css";
import { Link } from "react-router-dom";
import rentIMG from "../images/rent.jpeg";

const InnerHostel = () => {
 
  return (

      <body>
        <div>
     <nav className="mb-3 pt-md-3" aria-label="breadcrumb">
      <ol className="breadcrumb">
         <li className="breadcrumb-item"><a href="real-estate-home-v1.html">Home</a></li>
        <li className="breadcrumb-item"><a href="real-estate-catalog-rent.html">Property for rent</a></li> 
        <li className="breadcrumb-item active" aria-current="page">Pine Apartments</li>
      </ol>
    </nav>

    <h1 className="h2 mb-2">Pine Apartments</h1>
    <p className="mb-2 pb-1 fs-lg">28 Jackson Ave Long Island City, NY 67234</p>

    <div className="d-flex justify-content-between align-items-center">
      <ul className="d-flex mb-4 list-unstyled">
        <li className="me-3 pe-3 border-end"><b className="me-1">4</b><div className="fi-bed mt-n1 lead align-middle text-muted"></div></li>
        <li className="me-3 pe-3 border-end"><b className="me-1">2</b><div className="fi-bath mt-n1 lead align-middle text-muted"></div></li>
        <li className="me-3 pe-3 border-end"><b className="me-1">2</b><div className="fi-car mt-n1 lead align-middle text-muted"></div></li>
        <li><b>56 </b>sq.m</li>
      </ul>
      <div className="text-nowrap">
        <button className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2" type="button" data-bs-toggle="tooltip" title="" data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist"><div className="fi-heart"></div></button>
        <div className="dropdown d-inline-block" data-bs-toggle="tooltip" title="" data-bs-original-title="Share">
          <button className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2" type="button" data-bs-toggle="dropdown"><div className="fi-share"></div></button>
          <div className="dropdown-menu dropdown-menu-end my-1">
            <button className="dropdown-item" type="button"><div className="fi-facebook fs-base opacity-75 me-2"></div>Facebook</button>
            <button className="dropdown-item" type="button"><div className="fi-twitter fs-base opacity-75 me-2"></div>Twitter</button>
            <button className="dropdown-item" type="button"><div className="fi-instagram fs-base opacity-75 me-2"></div>Instagram</button>
          </div>
        </div>
      </div>
    </div> 
   
    <section className="container overflow-auto mb-4 pb-3" data-simplebar="init"/>
    <div className="simplebar-wrapper margin: 0px -12px -16px;">
      <div className="simplebar-height-auto-observer-wrapper">
      <div className="simplebar-height-auto-observer"></div></div></div>
      <div className="simplebar-mask">
      <div className="simplebar-offset right: 0px; bottom: 0px;">
      <div className="simplebar-content-wrapper  height: auto; overflow: hidden;" tabindex="0" role="region" aria-label="scrollable content" >
        <div className="simplebar-content padding: 0px 12px 16px;">
       <div className="row g-2 g-md-3 gallery min-width: 30rem;" data-thumbnails="true" >
        <div className="col-12">
          <div className="row g-2 g-md-3">
            <div className="col"><a className="gallery-item rounded-1 rounded-md-2" href="https://finder.createx.studio/img/real-estate/catalog/04.jpg" data-sub-html="<h6 className=&quot;fs-sm text-light&quot;>Bedroom</h6>" data-lg-id="dc5a8a61-eeb1-4368-8293-84bf28b94d19"><img src={rentIMG} alt="Gallery thumbnail"/></a></div>
            <div className="col"><a className="gallery-item rounded-1 rounded-md-2" href="https://finder.createx.studio/img/real-estate/catalog/05.jpg" data-sub-html="<h6 className=&quot;fs-sm text-light&quot;>Kitchen</h6>" data-lg-id="ff93ccd9-f7c0-4fa1-916c-7fd47ea3885b"><img src={rentIMG} alt="Gallery thumbnail"/></a></div>
            <div className="col"><a className="gallery-item rounded-1 rounded-md-2" href="https://finder.createx.studio/img/real-estate/single/01.jpg" data-sub-html="<h6 className=&quot;fs-sm text-light&quot;>Living room</h6>" data-lg-id="ef9c8a2f-4058-499e-b88b-5a960d8603b7"><img src={rentIMG} alt="Gallery thumbnail"/></a></div>
            <div className="col"><a className="gallery-item rounded-1 rounded-md-2" href="https://finder.createx.studio/img/real-estate/single/02.jpg" data-sub-html="<h6 className=&quot;fs-sm text-light&quot;>Bathroom</h6>" data-lg-id="ed55d92d-a85c-4359-97fe-64c30c72179c"><img src={rentIMG} alt="Gallery thumbnail"/></a></div>
            <div className="col"><a className="gallery-item more-item rounded-1 rounded-md-2" href="https://finder.createx.studio/img/real-estate/single/03.jpg" data-sub-html="<h6 className=&quot;fs-sm text-light&quot;>Bathroom</h6>" data-lg-id="b977e95b-00e3-4478-8ae2-8e1779689602"><img src={rentIMG} alt="Gallery thumbnail"/><span className="gallery-item-caption fs-base">+5 <span className="d-none d-md-inline">photos</span></span></a></div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
     <div className="col-md-7 mb-md-0 mb-4"><span className="badge bg-success me-2 mb-3">Verified</span><span className="badge bg-info me-2 mb-3">New</span></div>
      <h2 className="h3 mb-4 pb-4 border-bottom">$2,500<span className="d-inline-block ms-1 fs-base fw-normal text-body">/month</span></h2>  
      {/* <!-- Overview--> */}
      <div className="mb-4 pb-md-3">
        <h3 className="h4">Overview</h3>
        
        <p className="mb-1">Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
        <div className="collapse" id="seeMoreOverview">
          <p className="mb-1">Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
        </div><a className="collapse-label collapsed" href="#seeMoreOverview" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreOverview"></a>
      </div>
      {/* <!-- Property Details--> */}
      <div className="mb-4 pb-md-3">
        <h3 className="h4">Property Details</h3>
        <ul className="list-unstyled mb-0">
          <li><b>Type: </b>apartment</li>
          <li><b>Apartment area: </b>56 sq.m</li>
          <li><b>Built: </b>2015</li>
          <li><b>Bedrooms: </b>4</li>
          <li><b>Bathrooms: </b>2</li>
          <li><b>Parking places: </b>2</li>
         </ul>
      </div> 
      
      
        {/* Ammeneties    */}
       <div className="mb-4 pb-md-3">
        <h3 className="h4">Amenities</h3>
        <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
          <li className="col"><div className="fi-wifi mt-n1 me-2 fs-lg align-middle"></div>WiFi</li>
          <li className="col"><div className="fi-thermometer mt-n1 me-2 fs-lg align-middle"></div>Heating</li>
          <li className="col"><div className="fi-dish mt-n1 me-2 fs-lg align-middle"></div>Dishwasher</li>
          <li className="col"><div className="fi-parking mt-n1 me-2 fs-lg align-middle"></div>Parking place</li>
          <li className="col"><div className="fi-snowflake mt-n1 me-2 fs-lg align-middle"></div>Air conditioning</li>
          <li className="col"><div className="fi-iron mt-n1 me-2 fs-lg align-middle"></div>Iron</li>
          <li className="col"><div className="fi-tv mt-n1 me-2 fs-lg align-middle"></div>TV</li>
          <li className="col"><div className="fi-laundry mt-n1 me-2 fs-lg align-middle"></div>Laundry</li>
          <li className="col"><div className="fi-cctv mt-n1 me-2 fs-lg align-middle"></div>Security cameras</li>
        </ul>
        <div className="collapse" id="seeMoreAmenities">
          <ul className="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
            <li className="col"><div className="fi-no-smoke mt-n1 me-2 fs-lg align-middle"></div>No smoking</li> 
            <li className="col"><div className="fi-swimming-pool mt-n1 me-2 fs-lg align-middle"></div>Swimming pool</li>
            <li className="col"><div className="fi-double-bed mt-n1 me-2 fs-lg align-middle"></div>Double bed</li>
            <li className="col"><div className="fi-bed mt-n1 me-2 fs-lg align-middle"></div>Single bed</li>
          </ul>
        </div><a className="collapse-label collapsed" href="#seeMoreAmenities" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreAmenities"></a>
      </div> 

     <div className="mb-lg-5 mb-md-4 pb-lg-2 py-4 border-top">
        <ul className="d-flex mb-4 list-unstyled fs-sm">
          <li className="me-3 pe-3 border-end">Published: <b>Dec 9, 2020</b></li>
          <li className="me-3 pe-3 border-end">Ad number: <b>681013232</b></li>
          <li className="me-3 pe-3">Views: <b>48</b></li>
        </ul>
      </div> 
        
      </div>
      </body>
     
   
  );
};

export default InnerHostel;
