import OverviewCard from '../../components/OverviewCard/OverviewCard';
import './DashboardPage.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardPage({openModal}) {
    const [deliveries, setDeliveries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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

        fetchDeliveries();
    }, []);
    
    return(
        <>
            <OverviewCard openModal={openModal} deliveries={deliveries} isLoading={isLoading} error={error}/>
        </>
    )
}

export default DashboardPage;