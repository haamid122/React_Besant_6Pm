import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Office from "./components/Office.jsx"
import FavoriteFood from './components/FavoriteFood.jsx'
import IplDashboard from './components/IplDashboard.jsx'

function App() {

  return (
    <>
         <h1>Hai I am a main Component</h1> 
         {/* <Office/>     */}
         {/* <FavoriteFood/> */}
         <IplDashboard/>
    </>
  )
}

export default App


