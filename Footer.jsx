import React from "react";
import logo from "../images/agencyLogo.jpg";
import { Link } from "react-router-dom";
import "../StyleSheet/Footer.css";

const Footer = () => {
  return (
    // <div className="Footer__container">
    //   <div className="Footer__companyBrand">
    //     <Link to="/">
    //       <img src={logo} alt="logo" className="logo" />
    //     </Link>

    //   </div>
    //   <div className="Footer__licensing">
    //     <h4>©2022 | All Rights Reseverd</h4>
    //   </div>
    // </div>
    <div>
     
            
            {/* //     <div className="footer-dark">
            //     <footer>
            //       <div className="container">
            //         <div className="row">
            //           <div className="col-sm-6 col-md-3 item">
            //             <h3>Services</h3>
            //             <ul>
            //               <li><a href="#">Web design</a></li>
            //               <li><a href="#">Development</a></li>
            //               <li><a href="#">Hosting</a></li>
            //             </ul>
            //           </div>
            //           <div className="col-sm-6 col-md-3 item">
            //             <h3>About</h3>
            //             <ul>
            //               <li><a href="#">Company</a></li>
            //               <li><a href="#">Team</a></li>
            //               <li><a href="#">Careers</a></li>
            //             </ul>
            //           </div>
            //           <div className="col-md-6 item text">
            //             <h3>Company Name</h3>
            //             <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
            //           </div>
            //           <div className="col item social"><a href="#"><i className="icon ion-social-facebook" /></a><a href="#"><i className="icon ion-social-twitter" /></a><a href="#"><i className="icon ion-social-snapchat" /></a><a href="#"><i className="icon ion-social-instagram" /></a></div>
            //         </div>
            //         <p className="copyright">Company Name © 2018</p>
            //       </div>
            //     </footer>
            //   </div>
            <> */}
            <>
            <div className="footer-dark">
            <footer>
            <div className="Footer__container">
                     <div className="Footer__companyBrand">
                          {/* <Link to="/">
                            <img src={logo} alt="logo" className="logo" />
                         </Link> */}

                      </div>
                      </div>
                <div className="container">
                    <div className="foot">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Explore</h3>
                            <ul >
                                <li className="item1"><Link to="/">HOME</Link></li>
                                <br></br>
                                <li className="item1"><Link to="/properties/sale">HOSTEL</Link></li>
                                <br></br>
                                <li className="item1"><Link to="/properties/rent">MESS</Link></li>
                                <br></br>
                                <li className="item1"><Link to="/properties/sell">ENLIST YOUR HOSTEL</Link></li>
                                <br></br>
                                <li className="item1"><Link to="/contact-us">CONTACT US</Link></li>

                            </ul>
                        </div>
                        {/* <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div> */}
                        {/* <Link to="/">
    //                    <img src={logo} alt="logo" className="copyright" />
    //                   </Link> */}
                       
                        <div className="col-md-6 item text">
                            <h3>Hostel & Mess</h3>
                            <p style={{color:"white"}}>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div className="col item social" display="flex">
                            <a href="#"><i className="icon ion-social-facebook"></i></a>
                            <a href="#"><i className="icon ion-social-twitter"></i></a>
                            <a href="#"><i className="icon ion-social-snapchat"></i></a>
                            <a href="#"><i className="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p className="copyright" style={{color:"white"}}>Made with ❤️ by PBL group 1  © 2021-22</p>
                </div>
            </footer>
        </div>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script> */}
               </>
          
    
            
        
    </div>
  );
};

export default Footer;
