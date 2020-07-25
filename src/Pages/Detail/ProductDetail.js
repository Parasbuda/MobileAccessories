import React from "react"
import "./ProductDetail.css"
import {connect} from "react-redux"
import { selectProductDetail } from "../../Redux/cart/cartSelector"
import {createStructuredSelector} from "reselect"
import { addItem } from "../../Redux/cart/cartActions"
const ProductDetail=({detail,addItem})=>{
    return(
        <React.Fragment>
            <div className="container mb-5">
		<div className="card detail-card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						 
						</div>
						<ul className="preview-thumbnail nav nav-tabs ml-5">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  
						</ul>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{detail.name}</h3>
					
							
							
						
						<p className="product-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<h4 className="price mt-3">current price: <span>${detail.price}</span></h4>
						
						
						<h5 className="colors mt-3 ">colors:
							<span className="color black ml-3 " ></span>
							<span className="color white"></span>
							<span className="color red"></span>
						</h5>
						<div className="action ml-5">
							<button className="add-to-cart btn btn-default" type="button"  onClick={()=>{addItem(detail)}}>add to cart</button>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
 

        </React.Fragment>
    )
}
const mapStateToProps=createStructuredSelector({
    detail:selectProductDetail
})
const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})
export default connect(mapStateToProps,mapDispatchToProps)  (ProductDetail)