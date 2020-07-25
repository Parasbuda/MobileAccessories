import React from "react"
import "./Slider.css"


const Slider=()=>{
    return(
        <React.Fragment>
          <div id="carouselExampleInterval" className="carousel slide mt-1 " data-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="2000">
      <img src="1.jpg" className="d-block w-100 img-responsive" alt="item1" />
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src="2.jpg" className="d-block w-100 img-responsive" alt="item2"  />
    </div>
    <div className="carousel-item" data-interval="2000" >
      <img src="3.jpg" className="d-block w-100 img-responsive" alt="item3" />
    </div>
    <div className="carousel-item" data-interval="2000" >
      <img src="4.jpg" className="d-block w-100 img-responsive" alt="item4"  />
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src="5.jpg" className="d-block w-100 img-responsive" alt="item5"  />
    </div>
  </div>
 
  
</div>
        </React.Fragment>
    )
}
export default Slider