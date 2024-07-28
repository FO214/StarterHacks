import React, { useState } from 'react';
import './popUp.css'; // Import the CSS file

const PopupWindow = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={togglePopup}>
           {props.text}
            </button>
            {isOpen && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup-window" onClick={e => e.stopPropagation()}>
                        <span className="close-button" onClick={togglePopup}>&times;</span>
                        <h2>{props.title}</h2>
                        <p>{props.subtext}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupWindow;
