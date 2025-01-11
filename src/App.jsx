import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';


function App() {

  return (
    <BrowserRouter>
        {/* <ScrollToTop/> */}
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
