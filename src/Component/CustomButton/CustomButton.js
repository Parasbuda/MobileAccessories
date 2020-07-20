import React from "react"
import "./CustomButton.css"

const CustomButton=({children,inverted})=>{
   
    return(
        <React.Fragment>
            <button className={`${inverted ? 'inverted':''} custom-button`}>
                {children}
            </button>
        </React.Fragment>
    )
}
export default CustomButton