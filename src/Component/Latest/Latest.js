import React from "react"
import  "./Latest.css"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import ShopPreview from "../ShopPreview/ShopPreview"
import {selectOthers} from "../../Redux/Shop/shopSelector"
import LatestBlock from "../LatestBlock/LatestBlock"

const Latest=({others})=>{
    const remains=others.slice(1)
    console.log(remains)
    return(
        <div className="shop-overview">
            <div className="shopPreview">
            <h1 className="title text-center mt-2">{others[0].title.toUpperCase()}</h1>
            <div className="container">
                <div className="row mt-2">
               <LatestBlock key={others[0].id} item={others[0].items}/>
               </div>
                    </div>
                    </div>
                    

               {
                   remains.map(remain=>{
                     
                       return(
                          
                            <ShopPreview key={remain.id} items={remain.items} title={remain.title}
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
export default connect(mapStateToProps) (Latest)