import React, { useState } from 'react';
import './dropDown.css'; // Import the CSS file
import btn from "../assets/addBTN.jpg"
import PopupWindow from '../components/popUp';

const DropdownMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                <img src={btn} alt="Menu" className="menu-icon"  />
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <PopupWindow text={props.opt1} subtext="Smile!" title="Camera"/>
                    <PopupWindow text={props.opt2} subtext="Gimme the input" title="Insert Item Below:"/>
                    
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
