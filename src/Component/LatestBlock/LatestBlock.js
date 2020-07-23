import React from "react"
import "./LatestBlock.css"
import {connect} from "react-redux"
import {addItem} from "../../Redux/cart/cartActions"


const LatestBlock=({items,addItem})=>{
    console.log(items)
    const latestItems=items.splice(items.length-5)
    const small=latestItems.splice(1)
    const item=latestItems[0]
    const{id,imageUrl,price,name}=item
    return(
       
      <React.Fragment>
            <div className="col-md-4 col-xs-12 " key={id}>
                <div className="card shadow rounded  mb-5 " >
                    
                  
                        <img  src={imageUrl} alt="product" className="img"/>
                       
                    <div className="card-footer  justify-content-between d-flex ">
                   <span >{name}</span>
                    <span className="pl-2">${price}</span>
                    </div>
                    <button  onClick={()=>{addItem(item)}}   className="inverted" >
                   ADD TO CART </button>
                </div>
                </div>
          {
             
             small.map(item=>{
                const {id,name,price,imageUrl}=item
                  return(
                <div className="col-md-4  col-sm-6 col-xs-12 " key={id}>
                <div className="card shadow rounded  mb-5 " >
                    
                  
                        <img  src={imageUrl} alt="product" className="img"/>
                       
                    <div className="card-footer  justify-content-between d-flex ">
                   <span >{name}</span>
                    <span className="pl-2">${price}</span>
                    </div>
                    <button  onClick={()=>{addItem(item)}}   className="inverted" >
                   ADD TO CART </button>
                </div>
                
            </div>
                  )
            
              })
          }
       
      
            </React.Fragment>
        
    )
}
const matchDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})

export default  connect(null,matchDispatchToProps) (LatestBlock)