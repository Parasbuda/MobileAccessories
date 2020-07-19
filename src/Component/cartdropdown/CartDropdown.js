import React from "react"
import "./CartDropdown.css"
import CustomButton from "../CustomButton/CustomButton"


const CartDropdown=()=>{
    return(
        <React.Fragment>
            <div className="cart-dropdown">
                <div className="cart-items">
            
                </div>
                <CustomButton >GO TO CHECKOUT</CustomButton>
            </div>

            </React.Fragment>
    )
}
export default CartDropdown