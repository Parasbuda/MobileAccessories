import React from "react"
import "./CartIcon.css"
import cart from "../../assets/cart.svg"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../Redux/cart/cartActions"

const CartIcon=({toggleCartHidden})=>{
    return(
        <React.Fragment>
           <div className="cart-icon" onClick={toggleCartHidden}>
            
            <img src={cart} alt="cart" className="shoppingIcon"/> 
            <span className="item-count">0</span>
           
            </div>
           
             
        </React.Fragment>
    )
}


const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon)