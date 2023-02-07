import React from "react";
import logo from "../../assets/images/logo.svg"

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
                            <input type="text" placeholder="Your Name" required/>
                            <input type="email" placeholder="Your Name" required/>
                        </div>

                        <input type="text" placeholder="Your Message" required/>

                        <div className="text-center">
                            <button className="btn btn-accent">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="custom-container">

            </div>
        </footer>
    );
};

export default Footer;
