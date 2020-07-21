import React from "react"
import  "./ShopOverview.css"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import ShopPreview from "../ShopPreview/ShopPreview"
import {selectCollections} from "../../Redux/Shop/shopSelector"


const ShopOverview=({collections})=>{
    return(
        <div className="shop-overview">
               {
                   collections.map(collection=>{
                      
                       return(
                          
                            <ShopPreview key={collection.id} items={collection.items} title={collection.title} />
                           
                    )
                       })
                }
               
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    collections:selectCollections
})
export default connect(mapStateToProps) (ShopOverview)