import React from "react"
import "./CartItem.css"



const CartItem=({item})=>{
    const{imageUrl,price,name,quantity}=item
    return(
        <React.Fragment>
            <div className="cart-item">
                <img src={imageUrl} alt="item" className="cart-img"/>
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">{quantity} * ${price}</span>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CartItem