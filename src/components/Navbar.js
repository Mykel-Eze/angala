/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import M from "materialize-css";

const Navbar = () => {
    useEffect(()=> {
        var elemsSidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elemsSidenav);
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div id="nav-wrapper">
            <nav>
                <div className="container">
                    <div className="nav-items-wrapper">
                        <a href="/" className="brand-logo-wrapper">
                            <img src={require("../images/angala-logo.svg").default} alt="Metabnb" className="brand-logo-img" />
                        </a>

                        <ul className="nav-links hide-on-med-and-down">
                            <li>
                                <a href="/#about" className="nav-link" onClick={scrollToTop}>About Us</a>
                            </li>
                            <li>
                                <a href="/#products" className="nav-link" onClick={scrollToTop}>Our Products</a>
                            </li>
                            <li>
                                <a href="/#contact" className="nav-link" onClick={scrollToTop}>Contact Us</a>
                            </li>
                        </ul>

                        <ul className="dn-mobile ul-nav" id="nav-mobile-2">
                            <li>
                                <a href="#" data-target="slide-out" className="sidenav-trigger right">
                                    <img src={require("../images/menu.svg").default} alt="menu" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <div className="sidenav-logo">
                    <a href="/" className="sidenav-close">
                        <img src={require("../images/angala-logo.svg").default} alt="metabnb" className="brand-logo-img" />
                    </a>
                </div>

                <li>
                    <a href="/" className="nav-link sidenav-close" onClick={scrollToTop}>Home</a>
                </li>
                <li>
                    <a href="/#about" className="nav-link sidenav-close" onClick={scrollToTop}>About Us</a>
                </li>
                <li>
                    <a href="/#products" className="nav-link sidenav-close" onClick={scrollToTop}>Our Products</a>
                </li>
                <li>
                    <a href="/#contact" className="nav-link sidenav-close" onClick={scrollToTop}>Contact Us</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;