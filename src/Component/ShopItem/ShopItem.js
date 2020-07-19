import React from "react"
import "./ShopItem.css"


const ShopItem=({item})=>{
    const {name,price,imageUrl}=item
    return(
      <React.Fragment>
        <div className="col-md-4 col-lg-3 col-sm-6 ">
            <div className="card shadow rounded  mb-5 " >
                
              
                    <img  src={imageUrl} alt="product"/>
                   
                <div className="card-footer pl-5 ">
               {name}
                <span className="pl-5">${price}</span>
                </div>
            </div>
        </div>
        
      
            </React.Fragment>
        
    )
}
export default ShopItem