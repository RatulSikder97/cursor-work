import React from "react";
import htmlIcon from "../assets/images/html.svg";
import cssIcon from "../assets/images/css.svg";
import jqIcon from "../assets/images/jquery.svg";
import pythonIcon from "../assets/images/python.svg";
import springIcon from "../assets/images/spring.svg";
import wpIcon from "../assets/images/wp.svg";
import njIcon from "../assets/images/nodejs.svg";

const Specialization = () => {
    return (
        <div className="specialization-section">
            <div className="section-wrapper custom-container">
                <div className="header">
                    <h5 className="title">Specializing In</h5>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley.</p>
                </div>

                <div className="content">
                    <div className="card">
                        <img src={htmlIcon} alt="" />
                    </div>
                    <div className="card">
                        <img src={cssIcon} alt="" />
                    </div>
                    <div className="card">
                        <img src={jqIcon} alt="" />
                    </div>
                    <div className="card">
                        <img src={pythonIcon} alt="" />
                    </div>
                    <div className="card">
                        <img src={njIcon} alt="" />
                    </div>
                    <div className="card">
                        <img src={springIcon} alt="" />
                    </div>
                    <div className="card">
                        <img src={wpIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialization;