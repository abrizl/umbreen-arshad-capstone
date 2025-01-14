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



function AppContent() {

  const location = useLocation();
  const noFooterRoutes = ['/contact'];
  const shouldShowFooter = !noFooterRoutes.includes(location.pathname);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
      <Header />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Milkotov Special!</h2>
        <p>Freshly poured for you!</p>
        <button onClick={closeModal}>Close</button>
      </Modal>

      <Routes>
        <Route path="/" element={<LandingPage openModal={openModal}/> } />
        <Route path="/about" element={<AboutPage openModal={openModal} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schedule-delivery" element={<SchedulePage />} />
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
