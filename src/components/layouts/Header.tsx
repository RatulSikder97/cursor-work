import React from "react";
import logo from "../../assets/images/logo.svg" 

const Header = () => {
    return (
        <div className="main-header">
            <div className="custom-container">
                <a href="/">
                    <img src={logo} alt="main-logo" />
                </a>
            </div>
        </div>
    );
};

export default Header;
