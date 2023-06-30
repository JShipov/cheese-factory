import React from 'react';
import './App.css';
import {Navbar} from "./layouts/Navbar";
import {Footer} from "./layouts/Footer";
import Home from "./layouts/Home";
import {AboutUs} from "./layouts/AboutUs";
import CheeseDisplay from "./layouts/CheeseDisplay";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {ReceiptsPage} from "./layouts/ReceiptsPage";
import {ReceiptsDetail} from "./layouts/ReceiptsDetail";

const HomePage = () => {
    const location = useLocation();
    const isRecipeDetailPage = location.pathname.startsWith('/receipts/') && location.pathname !== '/receipts';

    return (
        <>
            <Home/>
            <CheeseDisplay/>
            <AboutUs/>
            {!isRecipeDetailPage && <Footer/>}
        </>
    );
};

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/receipts" element={<ReceiptsPage/>}/>
                <Route path="/receipts/:id" element={<ReceiptsDetail/>}/>
            </Routes>
        </Router>
    );
}

export default App;
