import React from "react";
import logoBlue from "../../assets/images/logo-blue.svg"
import facebook from "../../assets/images/facebook.svg"
import twitter from "../../assets/images/twitter.svg"
import linkedin from "../../assets/images/linkedin.svg"
import prienterist from "../../assets/images/prienterist.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact">
                <div className="header">
                    <p className="title">Having Ideas In Your Head?</p>
                    <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>

                <div className="content">
                    <form action="">
                        <div className="input-group">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Name" required />
                        </div>

                        <input type="text" placeholder="Your Message" required />

                        <div className="text-center">
                            <button className="btn btn-accent">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-content">
                <div className="custom-container">
                    <div className="footer-item">
                        <a href="/">
                            <img src={logoBlue} alt="" className="logo" />
                        </a>

                        <div className="subtext">
                            Copyright © 2022 <a href="/">Cursor Work</a>
                        </div>
                    </div>

                    <div className="footer-item">
                        <h2 className="title">Company</h2>

                        <a href="" className="subitem subtext">About</a>
                        <a href="" className="subitem subtext">Contact Us</a>
                        <a href="" className="subitem subtext">Portfolio</a>
                    </div>

                    <div className="footer-item">
                        <h2 className="title">Service</h2>

                        <a href="" className="subitem subtext">UX/UI Design</a>
                        <a href="" className="subitem subtext">App Development</a>
                        <a href="" className="subitem subtext">Web Development</a>
                    </div>

                    <div className="footer-item">
                        <h2 className="title"></h2>

                        <a href="" className="subitem subtext">Cloud Devops</a>
                        <a href="" className="subitem subtext">Digital Marketing</a>
                        <a href="" className="subitem subtext">AI/ML Services</a>
                    </div>

                    <div className="footer-item">
                        <h2 className="title">Follow Us</h2>

                        <div className="follow-links">
                            <a href="">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="">
                                <img src={prienterist} alt="" />
                            </a>
                            <a href="">
                                <img src={linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
