import React from "react"
import "./CartIcon.css"
import cart from "../../assets/cart.svg"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../Redux/cart/cartActions"
import {selectCartItemsCount} from "../../Redux/cart/cartSelector"
import {createStructuredSelector} from "reselect"

const CartIcon=({toggleCartHidden,itemCount})=>{
    return(
        <React.Fragment>
           <div className="cart-icon" onClick={toggleCartHidden}>
            
            <img src={cart} alt="cart" className="shoppingIcon"/> 
            <span className="item-count">{itemCount}</span>
           
            </div>
           
             
        </React.Fragment>
    )
}


const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemsCount
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)