import React from 'react'
import "./ShopPreview.css"
import ShopItem from "../ShopItem/ShopItem"
import addicon from "../../assets/addicon.png"
import {withRouter} from"react-router-dom"



const ShopPreview=({title,items,history})=> {
    
    return (
        <div className="shopPreview">
            <h1 className="title text-center mt-2">{title.toUpperCase()}</h1>
            <div className="container-fluid">
                <div className="row mt-2">

            {
               items.filter((item,idx)=>idx<3).map(item=>(
                  
                <ShopItem key={item.id} item={item}/>
               )
                   )
            }
             <div className="card shadow rounded ml-5  mb-5 more" onClick={()=>history.push("/")} >
                
                <img  src={addicon} alt="product"   />
               
                <hr className="hr"></hr>
                <span className=" ml-5 " > More Products</span>
               
                </div>
      
            </div>
        </div>
        </div>
    )
}

export default withRouter(ShopPreview)
