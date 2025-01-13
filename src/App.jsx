import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';


function AppContent() {

  const location = useLocation();
  const noFooterRoutes = ['/contact'];
  const shouldShowFooter = !noFooterRoutes.includes(location.pathname);


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
