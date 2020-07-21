import React from "react"
import "./CheckoutItem.css"
import  {connect} from "react-redux"
import {clearItemFromCart} from "../../Redux/cart/cartActions"
import CartItem from "../CartItem/CartItem"

const CheckoutItem=({cartItem,clearItem})=>{
    const{name,imageUrl,price,quantity}=cartItem
    return(
        <React.Fragment>
            <div className="checkout-item">
                <div className="image-container">
                    <img src={imageUrl} alt="product"/>
                </div>
                <span className="name-checkout">{name}</span>
                <span className="quantity-checkout">{quantity}</span>
                <span className="price-checkout">{price}</span>
                <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</div>
               
            </div>
        </React.Fragment>
    )
}
const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearItemFromCart(item))
})
export default connect(null,mapDispatchToProps) (CheckoutItem)