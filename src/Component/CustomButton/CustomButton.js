import React from "react"
import "./CustomButton.css"

const CustomButton=({children})=>{
    return(
        <React.Fragment>
            <button className="custom-button">
                {children}
            </button>
        </React.Fragment>
    )
}
export default CustomButton