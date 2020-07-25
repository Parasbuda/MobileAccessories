import React from "react"
import "./Jumbotron.css"
import {Link} from "react-router-dom"

const Jumbotron=()=>{
    return(
        <React.Fragment>
             <div className="container">
                
                 <div className="jumbotron mt-5 ">
                 <div className="row">
                     <div className="col-xs-12 col-lg-6 ">
           
               
                <h1 className="display-4">Hello, world!</h1>
       <p className="lead">Welcome you all to this popular mobile accessories website.</p>
       
                </div>
              
               <div className="col-xs-12 col-lg-6">
               
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner ">
 
    <div className="carousel-item active">
    <div className="row ">
            <div className="col-xs-12">
            <Link to="/shop/hats"> <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_180x.png?v=1579871956" className="d-block w-100 " alt="..."/></Link>
            </div>
            <div className="col-xs-12">
            <Link to="/shop/sneakers"> <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_180x.png?v=1579871975" className="d-block w-100 " alt="..."/></Link>
            </div>
        </div>
        </div>
      
     
    
    <div className="carousel-item">
    <div className="row d-flex ">
        <div className="col-xs-12">
        <Link to="/shop/jackets"> <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_180x.png?v=1579871901" className="d-block w-100 " alt="..."/></Link>
      </div>
      <div className="col-xs-12">
      <Link to="/shop/womens"><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_180x.png?v=1579872011" className="d-block w-100 " alt="..."/></Link>
      </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="row ">
        <div className="col-xs-12">
        <Link to="/shop/mens"><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_180x.png?v=1579872074" className="d-block w-100" alt="..."/></Link>
      </div>
      <div className="col-xs-12">
      <Link to="/shop/summer"><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_180x.jpg?v=1579872033" className="d-block w-100 " alt="..."/></Link>
      </div>
    </div>
    </div>
    <div className="carousel-item">
    <div className="row ">
        <div className="col-xs-12">
        <Link to="/shop/winter"><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_180x.png?v=1579871992" className="d-block w-100 " alt=""/></Link>
        </div>
        <div className="col-xs-12">
        <Link to="/shop/hats"><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_180x.png?v=1579871956" className="d-block w-100 " alt=""/></Link>
    </div>
  </div>
  </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
                </div>
                  </div> 
            </div>
            </div>
            </div>
            
  
        </React.Fragment>
    )
}
export default Jumbotron