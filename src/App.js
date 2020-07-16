import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Route,Switch} from "react-router-dom"

import Header from "./Component/header/Header"
import About from "./Component/Pages/About/About"
import Contact from "./Component/Pages/Contact/Contact"
import Blog from "./Component/Pages/Blog/Blog"
import Shop from "./Component/Pages/Shop/Shop"
class App extends React.Component {
  render(){
  return (
    <div >
    <Header/>
    <Switch>
  <Route exact path="/" component={()=><div>Hlw from Home</div>}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}
}

export default App;
