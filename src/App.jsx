import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        {/* <ScrollToTop/> */}
        <Routes>
          {/* <Route path="/" element={<HomePage photos={photos}/>}/>
          <Route path="/snaps/:photoid" element={<SnapsPage photos={photos}/>}/> 
          <Route path='*' element={<NotFoundPage/>}/> */}
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
