import React from 'react';
import './App.css';
import {Navbar} from "./layouts/Navbar";
import {Footer} from "./layouts/Footer";
import Home from "./layouts/Home";
import {AboutUs} from "./layouts/AboutUs";
import CheeseDisplay from "./layouts/CheeseDisplay";

function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <CheeseDisplay />
            <AboutUs/>
            <Footer/>
        </div>
    );
}

export default App;
