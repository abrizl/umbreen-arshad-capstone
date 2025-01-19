import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import EditDelivery from './components/EditDelivery/EditDelivery';



function AppContent() {

  const location = useLocation();
  const noFooterRoutes = ['/contact'];
  const shouldShowFooter = !noFooterRoutes.includes(location.pathname);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeliveryId, setSelectedDeliveryId] = useState(null);

  const openModal = (id) => {
    setSelectedDeliveryId(id); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedDeliveryId(null);
  };

  return (
    <>
    <ScrollToTop/>
      <LoginTab/>
      <Header />

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <EditDelivery deliveryId={selectedDeliveryId} onClose={closeModal}/>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}

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
