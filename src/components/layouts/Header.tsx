import React from "react";
import logo from "../../assets/images/logo.svg" 

const Header = () => {
    return (
        <div className="main-header">
            <div className="custom-container">
                <a href="/">
                    <img src={logo} alt="main-logo" />
                </a>

                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">Product</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                        <li>
                            <a href="/" className="btn">Get a Quote</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
