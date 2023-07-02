import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import Home from "./layouts/HomePage/Home";
import {AboutUs} from "./layouts/HomePage/AboutUs";
import CheeseDisplay from "./layouts/HomePage/CheeseDisplay";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {ReceiptsPage} from "./layouts/ReceiptsPage";
import {ReceiptsDetail} from "./layouts/ReceiptsDetail";
import {Products} from "./layouts/Products";
import {Contact} from "./layouts/ContactUsPage/Contact";

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
                <Route path="/products" element={<Products />} />
                <Route path="/receipts" element={<ReceiptsPage/>}/>
                <Route path="/receipts/:id" element={<ReceiptsDetail/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;
