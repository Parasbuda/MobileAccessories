import React from "react"
import "./Category.css"
import {connect} from "react-redux"
import {selectCategory} from "../../Redux/Shop/shopSelector"
import ShopItem from "../../Component/ShopItem/ShopItem"
const Category=({category})=>{
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
    category:selectCategory(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps) (Category)