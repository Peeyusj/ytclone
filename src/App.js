import React from "react";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
   <div>
    <Navbar/>
    <div className="c1">
    <Sidebar/>
    <Home/>
    </div>
   </div>
  
   
       );
}

export default App;
