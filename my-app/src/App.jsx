import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Office from "./components/Office.jsx"
import FavoriteFood from './components/FavoriteFood.jsx'
import IplDashboard from './components/IplDashboard.jsx'
import List from './components/List.jsx'
import Timer from './components/Timer.jsx'
import MyForm from './components/MyForm.jsx'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import MetroWorkers from './components/MetroWorkers.jsx'
import OldEmployeeData from './components/OldEmployeeData.jsx'
import NewEmployeesData from './components/NewEmployeesData.jsx'

function App() {

  return (
    <>
         <h1>Hai I am a main Component</h1> 
         {/* <Office/>     */}
         {/* <FavoriteFood/> */}
         {/* <IplDashboard/> */}
         {/* <List/> */}
         {/* <Timer/> */}
         {/* <MyForm/> */}
          
         

          <BrowserRouter>
          <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link  to='/contact'>Contact</Link></li>
          <li><Link  to='/metroworkers/1'>Worker 1 Details</Link></li>
          <li><Link  to='/metroworkers/2'>Worker 2 Details</Link></li>
          <li><Link  to='/employees/oldemployees'>Old Worker</Link></li>
          <li><Link  to='/employees/newemployees'>New worker</Link></li>
         </ul>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/metroworkers/:id' element={<MetroWorkers/>} />
                <Route path='/employees'>
                <Route path='oldemployees' element={<OldEmployeeData/>} />
                <Route path='newemployees' element={<NewEmployeesData/>} />
                </Route>
               

              </Routes>
          </BrowserRouter>
   
    </>
  )
}

export default App


