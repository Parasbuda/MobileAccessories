import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Header from "./Component/header/Header"
import About from "./Component/Pages/About/About"
import Contact from "./Component/Pages/Contact/Contact"
import Blog from "./Component/Pages/Blog/Blog"
function App() {
  return (
    <div >
    <Header/>
     <About/>
     <Contact/>
     <Blog/>
    </div>
  );
}

export default App;
