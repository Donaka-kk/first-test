import React from "react";
import NavBar from "./components/NavBar"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import './App.css';
import Home from "./components/Pages/Home.js";
import Services from "./components/Pages/Services.js";
import Products from "./components/Pages/Products.js";
import SignUp from "./components/Pages/SignUp.js";


function App() {
    return(
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path="/services" exact element={<Services/>} />
            <Route path="/Products" exact element={<Products/>} />
            <Route path="/sign-up" exact element={<SignUp/>} />
          </Routes>
        </Router>
      </>
    );
  
}
export default App;
