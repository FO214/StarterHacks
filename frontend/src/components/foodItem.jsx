import React from "react";
import { useState } from "react";
import './foodItem.css';

const FoodItem = (props) => {
    const [numItem, setNumItem] = useState(props.numFood);
    const [isClickable, setIsClickable] = useState(false);

    function makeClickable() {
        if (!isClickable) {
            setIsClickable(true);
        }
    }

    let itemChange = 0;

    function submitItemNumChangesToJSON() {
        setIsClickable(false);
        // let changed = {"props.food" : "itemChange"};
        itemChange = 0;
    }

    return (
        <div className="itemWrapper">
            <h3>{props.food}</h3>

            <div className="itemNumCtrl">
                <button className="changeNumBtn" onClick={() => {
                    makeClickable();
                    setNumItem(numItem - 1);
                    itemChange -= 1;
                    }}>-</button>
                <p>{numItem}</p>
                <button className="changeNumBtn" onClick={() => {
                    makeClickable();
                    setNumItem(numItem + 1);
                    itemChange += 1;
                    }}>+</button>
                <button id="submitItemNumChangesToJSON" disabled={!isClickable} onClick={() => {submitItemNumChangesToJSON()}}>Submit Changes</button>
            </div>
        </div>
    )
}

export default FoodItem