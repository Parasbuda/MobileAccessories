import React from "react"
import "./CartDropdown.css"
import CartItem from "../CartItem/CartItem"
import {connect} from "react-redux"


const CartDropdown=({cartItems})=>{
    return(
        <React.Fragment>
            <div className="cart-dropdown">
                <div className="cart-items">
               {
                   cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}/>)
               }
                </div>
                <button type="submit" className="custom-button" >GO TO CHECKOUT</button>
            </div>

            </React.Fragment>
    )
}
const mapStateToProps=state=>({
    cartItems:state.cart.cartItems
})
export default connect(mapStateToProps) (CartDropdown)