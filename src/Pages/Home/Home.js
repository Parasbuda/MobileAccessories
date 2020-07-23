import React from 'react'
import HomeOverview from "../../Component/HomeOverview/HomeOverview"
import {Route} from "react-router-dom"
import HomeCategory from "../Category/Category"
 const Home=({match})=> {
        return (
           
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={HomeOverview}/>
            <Route  path={`${match.path}/:categoryId`} component={HomeCategory}/>
           
               </div>
        )
    }

   
export default  Home