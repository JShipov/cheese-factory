import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {ReceiptsPage} from "./ReceiptsPage";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-orange py-3">
            <div className="container-fluid">
                <span className="navbar-brand">Welcome to the home cheese factory</span>
                <button className="navbar-toggler bg-white"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="NavbarDropdown"
                        aria-expanded="false"
                        aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Our products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/receipts">Receipts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
