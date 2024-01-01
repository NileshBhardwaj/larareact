import React from "react";
import ReactDOM from "react-dom/client" 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route, Link, BrowserRouter, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Analytics from "./Analytics";
import Signup from "./Signup";

function MyApp() {
    return( 
    <BrowserRouter basename="">
        <nav>
        <ul>
            <li>
                <Link to="/"><FontAwesomeIcon icon={faHome} /> Home </Link>
            </li>

            <li>
                <Link to="/contact"> Contact </Link>
            </li>
            <li>
                <Link to="/login"><FontAwesomeIcon icon={faSignIn} /> Login </Link>
            </li>
            <li>
                <Link to="/analytics">Analytics </Link>
            </li>
            <li>
                <Link to="/about"> About </Link>
            </li>
           

        </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/analytics" element={<Analytics />} />

            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />



        </Routes>
      
    </BrowserRouter>
    
    );
}
ReactDOM.createRoot(document.getElementById('app')).render(<MyApp/>);