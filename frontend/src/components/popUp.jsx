import React, { useState } from 'react';
import './popUp.css'; // Import the CSS file

const PopupWindow = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={togglePopup}>Open Popup</button>
            {isOpen && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup-window" onClick={e => e.stopPropagation()}>
                        <span className="close-button" onClick={togglePopup}>&times;</span>
                        <h2>Popup Title</h2>
                        <p>I'm him himma</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupWindow;
