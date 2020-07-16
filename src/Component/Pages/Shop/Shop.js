import React, { Component } from 'react'
import ShopData from "./Shop.data"
import ShopPreview from "../../ShopPreview/ShopPreview"
import "./Shop.css"
export default class Shop extends Component {
    state={
        collections:ShopData
    }
    render() {
       
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(collection=>
                       
                            <ShopPreview items={collection.items} title={collection.title} key={collection.id}/>
                        
                    )
                }
                <ShopPreview/>
               </div>
        )
    }
}

