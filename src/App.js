import React from "react";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Routes,Route,Link,useLocation} from "react-router-dom"
import About from "./components/About";
import Addvideo from "./components/Addvideo";
import Pagenotfound from "./components/Pagenotfound";
function App() {

  return (
   <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<div className="c1">
    <Sidebar/>
    <Home/>
    </div>}/>
     <Route path='/about' element={<About/>}/> 
    <Route path='/addvid' element={<Addvideo/>}/>
    <Route path='*' element={<Pagenotfound/>}/> 

    </Routes>
    </Router>
   </div>
    
   
  
   
       );
}

export default App;
