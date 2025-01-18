import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Modal from './components/Modal/Modal';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import LoginTab from './components/LoginTab/LoginTab';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ScrollToTop from './components/ScrollTop/ScrollTop';



function AppContent() {

  const location = useLocation();
  const noFooterRoutes = ['/contact'];
  const shouldShowFooter = !noFooterRoutes.includes(location.pathname);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
    <ScrollToTop/>
      <LoginTab/>
      <Header />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Milkotov Special!</h2>
        <p>Freshly poured for you!</p>
        <button onClick={closeModal}>Close</button>
      </Modal>

      <Routes>
        <Route path="/" element={<LandingPage/> } />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schedule-delivery" element={<SchedulePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage openModal={openModal}/>} />

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
