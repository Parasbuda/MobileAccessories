import React, { Component } from 'react'
import ShopOverview from "../../Component/ShopOverview/ShopOverview"
import {Route} from "react-router-dom"
import Category from "../Category/Category"
import Error from "../Error/Error"
 const Shop=({match})=> {
        return (
           
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={ShopOverview}/>
            <Route path={`${match.path}/:categoryId`} component={Category}/>
           
               </div>
        )
    }

   
export default  Shop

