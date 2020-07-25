import React from "react"
import "./Header.css"
import logo from "../../assets/logo_transparent.png"

import {Link} from "react-router-dom"
import CartIcon from "../CartIcon/CartIcon"
import CartDropdown from "../cartdropdown/CartDropdown"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCartHidden} from "../../Redux/cart/cartSelector"
import Megamenu from "../Megamenu/Megamenu"

const Header=({hidden})=>{
 
    return(
       <React.Fragment>
           <nav className="navbar navbar-expand-lg navbar-dark  ">
             <div className="container-fluid">
  <div className="navbar-brand">
    <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
    </div>
  <Link to="/"><span className="navbar-text">Merachi Tech</span></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ml-auto">
    <li className="nav-item dropdown position-static"><Link to="/shop" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">SHOP</Link>
                  <Megamenu/>
                </li>
     
      
      <li className="nav-item ">
        <Link className="nav-link" to="/about">ABOUT US </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">CONTACT</Link>
      </li>
      
      <li className="nav-item">
      <Link className="nav-link last" to="/blog">BLOG</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <i className="fa fa-user " />
     <CartIcon/>
     {
       hidden? null: <CartDropdown/>
     }
     
    </form>
  </div>
  </div>
</nav>

       </React.Fragment>
    )
}

const mapStateToProps=createStructuredSelector({
  hidden:selectCartHidden
})
export default connect(mapStateToProps) (Header)