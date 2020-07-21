import React from "react"
import {Link} from "react-router-dom"

const Megamenu=()=>{
    return(
        <div className="dropdown-menu top-auto ">
        <div className="container-fluid mega ">
            <div className="row ">
                <div className=" col">
              
   
   <Link to="/shop/hats"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_180x.png?v=1579871956" alt="2nd"/></Link>
   
   <Link to="/shop/sneakers"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_180x.png?v=1579871975" alt="3rd"/></Link>
   
   <Link to="/shop/jackets"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_180x.png?v=1579871901" alt="4th"/></Link>
  
   <Link to="/shop/womens"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_180x.png?v=1579872011" alt="5th"/></Link>
   
   <Link to="/shop/mens"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_180x.png?v=1579872074" alt="6th"/></Link>
 
  
   <Link to="/shop/summer"><img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_180x.jpg?v=1579872033" alt="7th"/></Link>

   <Link to="/shop/winter"> <img className="item" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_180x.png?v=1579871992" alt="1st"/></Link>
   
 
                </div>
               
            </div>
        </div>
    </div>
    )
}
export default Megamenu