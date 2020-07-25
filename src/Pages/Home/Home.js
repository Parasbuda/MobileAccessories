import React from 'react'
import HomeOverview from "../../Component/HomeOverview/HomeOverview"
import {Route} from "react-router-dom"
import HomeCategory from "../Category/Category"
import Slider from "../../Component/Slider/Slider"
import Jumbotron from '../../Component/Jumbotron/Jumbotron'

 const Home=({match})=> {
        return (
           <React.Fragment>
               <Slider/>
               <Jumbotron/>
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={HomeOverview}/>
            <Route  path={`${match.path}/:categoryId`} component={HomeCategory}/>
           
               </div>
              
               </React.Fragment>
        )
    }

   
export default  Home