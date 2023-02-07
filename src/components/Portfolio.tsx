import React from "react";
import workBg from '../assets/images/work-bg.svg';
import workImg from '../assets/images/work-img.png';

const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <div className="bg">
                <img src={workBg} alt="" />
                <p className="title">How we work?</p>
            </div>
            <div className="content">
                <div className="work-card">
                    <img src={workImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;