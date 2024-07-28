// import { useState } from 'react'
import MyFridge from './pages/myfridge'
import './App.css'
import RecipeItem from './components/recipeItem'
import ScrollableWindow from './components/recipeHist';

//maybe delete depedning on if we use a popupwindow
import PopupWindow from './components/popUp';

import DropdownMenu from './components/dropDown';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <MyFridge />
    </>
  )
}

export default App
