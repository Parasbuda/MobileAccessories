import React from 'react'
import "./ShopPreview.css"
import ShopItem from "../ShopItem/ShopItem"

import {withRouter} from"react-router-dom"



const ShopPreview=({title,routeName,items,history})=> {
    
    return (
        <div className="shopPreview">
            <h1 className="title text-center mt-2">{title.toUpperCase()}</h1>
            <div className="container">
                <div className="row mt-2">

            {
               items.filter((item,idx)=>idx<4).map(item=>(
                  
                <ShopItem key={item.id} item={item}/>
               )
                   )
            }
            
      
            </div>
        </div>
        </div>
    )
}

export default withRouter(ShopPreview)
