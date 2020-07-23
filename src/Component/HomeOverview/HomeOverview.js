import React from "react"
import  "./HomeOverview.css"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import ShopPreview from "../ShopPreview/ShopPreview"
import {selectOthers} from "../../Redux/Shop/shopSelector"


const HomeOverview=({others})=>{
    return(
        <div className="shop-overview">
               {
                   others.map(other=>{
                      
                       return(
                          
                            <ShopPreview key={other.id} items={other.items} title={other.title}
                             />
                           
                    )
                       })
                }
               
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    others:selectOthers
   
})
export default connect(mapStateToProps) (HomeOverview)