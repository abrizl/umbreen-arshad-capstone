import OverviewCard from '../../components/OverviewCard/OverviewCard';
import './DashboardPage.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';
import EditDelivery from '../../components/EditDelivery/EditDelivery';

function DashboardPage({}) {
    const [deliveries, setDeliveries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [userInfo, setUserInfo] = useState(null);
    const [userError, setUserError] = useState(null);

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

   
        const fetchDeliveries = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await fetch('http://localhost:5000/api/dashboard/my-deliveries', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch deliveries');
                }

                const data = await response.json();
                setDeliveries(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchUserInfo = async () => {
            const token = localStorage.getItem('token');
    
            try {
                const response = await fetch('http://localhost:5000/api/dashboard/user-info', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
    
                if (!response.ok) {
                    throw new Error('Failed to fetch user information');
                }
    
                const data = await response.json();
                setUserInfo(data);
            } catch (err) {
                setUserError(err.message);
            }
        };

    useEffect(() => {
        fetchDeliveries();
        fetchUserInfo();
    }, []);
    
    return(
        <>
            <OverviewCard openModal={openModal} deliveries={deliveries} isLoading={isLoading} error={error} userInfo={userInfo} userError={userError}/>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                <EditDelivery deliveryId={selectedDeliveryId} onClose={closeModal} fetchDeliveries={fetchDeliveries}/>
                <button onClick={closeModal}>Close</button>
                </Modal>
            )}
        
        </>
    )
}

export default DashboardPage;