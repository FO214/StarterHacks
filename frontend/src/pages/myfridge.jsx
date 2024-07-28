import NavBar from "../components/navbar";
import FoodItem from "../components/foodItem";
import DropdownMenu from "../components/dropDown";

const MyFridge = () => {
    return (
        <div>
            <NavBar />
            <div>
                <h3>Fridge Inventory</h3>
                <DropdownMenu opt1="Upload a Photo" opt2="Add Manually"/>
            </div>
            <div>
                <FoodItem food="example" numFood={1} />
            </div>
        </div>
    )
}

export default MyFridge