import React from "react"
import "./ShopItem.css"
import CustomButton from "../CustomButton/CustomButton"

const ShopItem=({item})=>{
    const {name,price,imageUrl}=item
    return(
      <React.Fragment>
        <div className="col-md-4 col-lg-3 col-sm-6 ">
            <div className="card shadow rounded  mb-5 " >
                
              
                    <img  src={imageUrl} alt="product"/>
                   
                <div className="card-footer  justify-content-between d-flex ">
               <span className="pl-2">{name}</span>
                <span className="pl-5">${price}</span>
                </div>
                <CustomButton className="inverted" inverted>ADD TO CART </CustomButton>
            </div>
            
        </div>
        
      
            </React.Fragment>
        
    )
}
export default ShopItem