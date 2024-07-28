import React from 'react';
import NavBar from "../components/navbar";
import FoodItem from "../components/foodItem";
import DropdownMenu from "../components/dropDown";

const MyFridge = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', padding: '20px', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', height: '100%' }}>
        <div style={{ width: '100%' }}>
          <h3>Fridge Inventory</h3>
          <DropdownMenu opt1="Upload a Photo" opt2="Add Manually" />
        </div>
        <div style={{ width: '100%' }}>
          <FoodItem food="example" numFood={1} />
        </div>
      </div>
    </>
  );
}

export default MyFridge;
