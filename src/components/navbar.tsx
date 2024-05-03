import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div>
            <center>
                <nav className="navbar navbar-expand-lg bg-body-secondary">
                    <div className="container-fluid">
                        <a className="navbar navbar-brand" href="/">Navbar</a>
                        <div className=" navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home"> Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile"> Profile </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register"> Register </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home"> Sign In </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home"> Sign Out </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </center>
        </div>
    );
}