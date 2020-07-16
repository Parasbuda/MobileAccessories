import React from "react"
import "./Header.css"
import logo from "../../assets/logo_transparent.png"
import {Link} from "react-router-dom"
const Header=()=>{
    return(
       <React.Fragment>
           <nav className="navbar navbar-expand-lg navbar-dark ">
             <div className="container-fluid">
  <div className="navbar-brand">
    <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
    </div>
  <span className="navbar-text">Merachi Tech</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ml-auto">
    <li className="nav-item dropdown position-static"><a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">SHOP</a>
                    <div className="dropdown-menu top-auto mega">
                        <div className="container-fluid ">
                            <div className="row ">
                                <div className=" col">
                                <Link to="/shop"> <img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_180x.png?v=1579871992" alt="1st"/></Link>
                   
                   <Link to="/shop"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_180x.png?v=1579871956" alt="2nd"/></Link>
                   
                   <Link to="/shop"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_180x.png?v=1579871975" alt="3rd"/></Link>
                   
                   <Link to="/shop"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_180x.png?v=1579871901" alt="4th"/></Link>
                  
                   <Link to="/shop"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_180x.png?v=1579872011" alt="5th"/></Link>
                   
                   <Link to="/shop"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_180x.png?v=1579872074" alt="6th"/></Link>
                 
                  
                   <Link to="/shop"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_180x.jpg?v=1579872033" alt="7th"/></Link>
               
                 
                   
                 
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </li>
     
      
      <li className="nav-item ">
        <a className="nav-link" href="#">ABOUT US </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CONTACT</a>
      </li>
      
      <li className="nav-item">
      <a className="nav-link last" href="#">BLOG</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        
      
    </form>
  </div>
  </div>
</nav>

       </React.Fragment>
    )
}
export default Header