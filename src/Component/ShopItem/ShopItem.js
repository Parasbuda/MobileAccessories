import React from "react"
import "./ShopItem.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {addItem, productDetail} from "../../Redux/cart/cartActions"


const ShopItem=({item,addItem,productDetail})=>{
    const {name,price,imageUrl}=item
   
    return(
      <React.Fragment>
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 ">
            <div className="card shop-card shadow rounded  mb-5 " >
                
              
                    <img  src={imageUrl} alt="product"/>
                   
                <div className="card-footer  justify-content-between d-flex ">
               <span >{name}</span>
                <span className="pl-2">${price}</span>
                </div>
                <Link to="/detail"><button  onClick={()=>{productDetail(item)}}   className="detail" >
               <i className="fa fa-eye"/></button></Link>
                <button  onClick={()=>{addItem(item)}}   className="inverted" >
               <i className="fa fa-cart-plus"/></button>
               
            </div>
            
        </div>
        
      
            </React.Fragment>
        
    )
}
const matchDispatchToProps=dispatch=>({
    productDetail:item=>dispatch(productDetail(item)),
    addItem:item=>dispatch(addItem(item))
    
})

export default  connect(null,matchDispatchToProps) (ShopItem)