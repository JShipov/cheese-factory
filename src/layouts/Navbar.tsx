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
                            <a className="nav-link" href="#">Our products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Receipts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
