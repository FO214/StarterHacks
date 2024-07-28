import NavBar from "../components/navbar";
import FoodItem from "../components/foodItem";

const MyFridge = () => {
    return (
        <div>
            <NavBar />
            <h3>Fridge Inventory</h3>
            <div>
                <FoodItem food="example" numFood={1} />
            </div>
        </div>
    )
}

export default MyFridge