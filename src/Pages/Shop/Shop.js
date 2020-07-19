import React, { Component } from 'react'
import ShopData from "./Shop.data"
import ShopPreview from "../../Component/ShopPreview/ShopPreview"


export default class Shop extends Component {
    state={
        collections:ShopData
    }
    render() {
        const {collections}=this.state
       
        return (
           
            <div className="shop-page">
                {
                   collections.map(collection=>{
                       console.log(collection)
                       return(
                          
                            <ShopPreview key={collection.id} items={collection.items} title={collection.title} />
                           
                    )
                       })
                }
               
               </div>
        )
    }
}

