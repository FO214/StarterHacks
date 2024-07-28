// import { useState } from 'react'
import './App.css'
import RecipeItem from './components/recipeItem'
import ScrollableWindow from './components/recipeHist';

//maybe delete depedning on if we use a popupwindow
import PopupWindow from './components/popUp';

import DropdownMenu from './components/dropDown';

function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div className="app">
      <RecipeItem 
        name="Apple" 
        quantity={3}
         // Replace with a valid image URL
      />
      <div className="app">
      <RecipeItem 
        name="Banana" 
        quantity={2}
         // Replace with a valid image URL
      />
      </div>
      
      
      <DropdownMenu opt1="Camera" opt2="Manual Input"/>
      <ScrollableWindow/>
      
      

      <div>
        {/* You can add more content here if needed */}
      </div>
    </div>
   
    
  );
}

export default App
