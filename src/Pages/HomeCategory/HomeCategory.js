import React from "react"
import "./HomeCategory.css"
import {connect} from "react-redux"
import {selectOthersCategory} from "../../Redux/Shop/shopSelector"
import ShopItem from "../../Component/ShopItem/ShopItem"

const HomeCategory=({category})=>{
    const {title,items}=category
    return(
        <div className="category">
            <h2 className="title">{title}</h2>
            <div className="items">
                <div className="container">
                    <div className="row mt-2">
                    {
                    items.map(item=><ShopItem key={item.id} item={item}/>)
                }
                    </div>
                </div>
              
            </div>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>({
    homecategory:selectOthersCategory(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps) (HomeCategory)