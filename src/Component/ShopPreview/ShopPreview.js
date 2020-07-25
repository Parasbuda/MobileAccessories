import React from 'react'
import "./ShopPreview.css"
import ShopItem from "../ShopItem/ShopItem"





const ShopPreview=({title,items})=> {
    
    return (
        <div className="shopPreview">
            <h1 className="title text-center mt-2">{title.toUpperCase()}</h1>
            <div className="container">
                <div className="row mt-2">

            {
               items.splice(items.length-3).map(item=>(
                  
                <ShopItem key={item.id} item={item}/>
               )
                   )
            }
            
      
            </div>
        </div>
        </div>
    )
}

export default ShopPreview
