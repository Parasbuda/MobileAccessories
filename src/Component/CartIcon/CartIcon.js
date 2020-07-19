import React from "react"
import "./CartIcon.css"
import cart from "../../assets/cart.svg"


const CartIcon=()=>{
    return(
        <React.Fragment>
           <div className="cart-icon">
            
            <img src={cart} alt="cart" className="shoppingIcon"/> 
            <span className="item-count">0</span>
           
            </div>
           
             
        </React.Fragment>
    )
}
export default CartIcon