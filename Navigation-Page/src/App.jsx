import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
     <div>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='login' element={< Login/>}/> 
        </Routes>
      </div>
     </Router>
    </>
  )
}

export default App
