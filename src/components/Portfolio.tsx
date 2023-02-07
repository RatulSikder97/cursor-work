import React from "react";
import workBg from '../assets/images/work-bg.svg';

const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <div className="bg">
                <img src={workBg} alt="" />
                <p className="title">How we work?</p>
            </div>

            <div className="section-wrapper custom-container">
                <div className="content">

                </div>
            </div>
        </div>
    );
};

export default Portfolio;