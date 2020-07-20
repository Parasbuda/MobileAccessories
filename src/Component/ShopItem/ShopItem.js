import React from "react"
import "./ShopItem.css"
import {connect} from "react-redux"
import {addItem} from "../../Redux/cart/cartActions"


const ShopItem=({item,addItem})=>{
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
                <button  onClick={()=>addItem(item)}   className="inverted" >
               ADD TO CART </button>
            </div>
            
        </div>
        
      
            </React.Fragment>
        
    )
}
const matchDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})

export default  connect(null,matchDispatchToProps) (ShopItem)