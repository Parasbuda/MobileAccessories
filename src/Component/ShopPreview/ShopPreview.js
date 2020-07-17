import React from 'react'
import "./ShopPreview.css"
import ShopItem from "../ShopItem/ShopItem"

const ShopPreview=({title,items})=> {
    
    return (
        <div className="shopPreview">
            <h1 className="title text-center mt-2">{title.toUpperCase()}</h1>
            <div className="container-fluid">
                <div className="row mt-3">

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

export default ShopPreview
