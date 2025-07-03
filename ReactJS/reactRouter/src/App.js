// import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";

//different components
const Home=()=><div><h2>This is my Home Page</h2></div>;
const About=()=><div><h2>This is my About Page</h2></div>;
const Contact=()=><div><h2>This is my Contact Page</h2></div>;
const NotFound=()=><div><h2>404 - Page Not Found!</h2></div>;

const App=()=>{
  return(
    <Router>
      <div>
        <nav style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" exact element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
};


export default App;
