import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className='bg-zinc-50 text-white font-mono flex h-screen w-full' style={{scrollbarWidth : 'none'}}>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/product/:category' element={<Home/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      <ToastContainer position="top-right" toastStyle={{ backgroundColor: "black", color : "white " }}/>
    </div>
  )
}

export default App
