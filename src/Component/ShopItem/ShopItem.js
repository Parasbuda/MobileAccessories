import React from "react"
import "./ShopItem.css"


const ShopItem=({item})=>{
    const {id,name,price,imageUrl}=item
    return(
      
        <div className="col-md-3">
            <div className="card shadow rounded" >
                
              
                    <img  src={imageUrl} alt="product"   />
                   
                <div className="card-footer ">
                <span>{name}</span>
                <span className="price">{price}</span>
                </div>
            </div>
        </div>
       
     
        
    )
}
export default ShopItem