import React from 'react'
import "./ShopPreview.css"
const ShopPreview=({title,items})=> {
    
    console.log(title,items)
    return (
        <div className="shopPreview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
               items.filter((item,idx)=>idx<4).map(item=>
                <div key={item.id}>{item.name}</div>
                )
            }
            </div>
        </div>
    )
}

export default ShopPreview
