import React from "react";
import workProcessIcon from '../assets/images/work-flow.svg';

const WorkProcess = () => {
    return (
        <div className="work-process-section">
            <div className="section-wrapper custom-container">
                <p className="title">How we work?</p>

                <img src={workProcessIcon} alt="work process" />
            </div>
        </div>
    );
};

export default WorkProcess;