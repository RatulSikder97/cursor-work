import React from "react";
import uiLogo from "../assets/images/ui-ux.svg";
import webLogo from "../assets/images/web-dev.svg";
import mobileLogo from "../assets/images/mobile-app.svg";

const Service = () => {
    return (
        <div className="service-section">
            <div className="section-wrapper custom-container">
                <h2 className="title">What can we do?</h2>

                <div className="content">
                    <div className="service-card">
                        <img src={uiLogo} alt="" className="logo" />

                        <h3 className="title">UX/UI Design</h3>

                        <p className="description">
                            We understand your pain points and create
                            the best usr friendly & beautiful web and
                            mobile design to meet your business goals.
                        </p>
                    </div>

                    <div className="service-card">
                        <img src={mobileLogo} alt="" className="logo" />

                        <h3 className="title">App Development</h3>

                        <p className="description">
                            We understand your pain points and create
                            the best usr friendly & beautiful web and
                            mobile design to meet your business goals.
                        </p>
                    </div>

                    <div className="service-card">
                        <img src={webLogo} alt="" className="logo" />

                        <h3 className="title">Web Development</h3>

                        <p className="description">
                            We understand your pain points and create
                            the best usr friendly & beautiful web and
                            mobile design to meet your business goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;