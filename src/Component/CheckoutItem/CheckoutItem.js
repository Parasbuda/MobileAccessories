import React from "react"
import "./CheckoutItem.css"


const CheckoutItem=({cartItem:{name,imageUrl,price,quantity}})=>{
    return(
        <React.Fragment>
            <div className="checkout-item">
                <div className="image-container">
                    <img src={imageUrl} alt="product"/>
                </div>
                <span className="name-checkout">{name}</span>
                <span className="quantity-checkout">{quantity}</span>
                <span className="price-checkout">{price}</span>
                <div className="remove-button">&#10005;</div>
               
            </div>
        </React.Fragment>
    )
}
export default CheckoutItem