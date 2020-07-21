import React from "react"
import "./CartDropdown.css"
import CartItem from "../CartItem/CartItem"
import {connect} from "react-redux"
import { selectCartItems } from "../../Redux/cart/cartSelector"
import {withRouter} from "react-router-dom"
import {createStructuredSelector} from "reselect"
import {toggleCartHidden} from "../../Redux/cart/cartActions"


const CartDropdown=({cartItems,history,dispatch})=>{
    return(
        <React.Fragment>
            <div className="cart-dropdown">
                <div className="cart-items">
               {
                   cartItems.length?
                   (cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}/>)):
                   (<span className="empty-message">Your Cart is Empty !!!</span>) 
               }
                </div>
                <button type="button" className="custom-button" onClick={()=>{history.push("/checkout");
            dispatch(toggleCartHidden())}} >GO TO CHECKOUT</button>
            </div>

            </React.Fragment>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})
export default withRouter(connect(mapStateToProps) (CartDropdown))