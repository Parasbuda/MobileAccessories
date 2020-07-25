import React from "react"
import "./Footer.css"
import {Link} from "react-router-dom"

const Footer=()=>{
    return(
        <React.Fragment>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-lg-4">
                       <div className="footer-widget category-widget">
                            <h2 className="widget-title">Category</h2>
                            <ul>
                                <li><Link to="/shop/hats">Hats</Link></li>
                                <li><Link to="/shop/sneakers">Sneakers</Link></li>
                                <li><Link to="/shop/jackets">Jackets</Link></li>
                                <li><Link to="/shop/womens">Womens</Link></li>
                                <li><Link to="/shop/mens">Mens</Link></li>
                                <li><Link to="/shop/summer">Summer</Link></li>
                                <li><Link to="/shop/winter">Winter</Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="footer-widget information-widget">
                       <h2 className="widget-title">Information</h2>
                       <ul>
                           <li><Link to="/shop/hats">About Us</Link></li>
                           <li><Link to="/shop/sneakers">Contact Us</Link></li>
                           <li><Link to="/shop/jackets">Term & Condition</Link></li>
                           <li><Link to="/shop/womens">Return & Exchange</Link></li>
                           <li><Link to="/shop/mens">Shipping & Delivery</Link></li>
                           <li><Link to="/shop/summer">Private Policy</Link></li>
                           
                       </ul>
                   </div>
                   </div>
                   <div className="col-lg-4">
                       <div className="footer-widget contact-widget">
                           <h2 className="widget-title">Contact</h2>
                           <div className="contact-address">
                               
                              <i className="fa fa-map-marker"/> Address: kathmandu, Nepal
                             
                           </div>
                           <div className="contact-number">
                              <i className="fa fa-phone"/> Phone: 981234567890
                           </div>
                           <div className="contact-email">
                              <i className="fa fa-envelope"/> Email:email@gmail.com
                           </div>
                           <div className="social-widget">
                               <Link to="/"><i className="fab fa-facebook"/></Link>
                               <Link to="/"><i className="fab fa-instagram"/></Link>
                               <Link to="/"><i className="fab fa-twitter"/></Link>
                               
                           </div>
                       </div>
                   </div>

                        </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <p><span>copyright &copy; 2020 All rights reserved!!! </span><br></br>
                        Powered By: Merachi Tech pvt Ltd kathmandu, Nepal</p>
                    </div>
                </div>
           

        </React.Fragment>
    )
}
export default Footer