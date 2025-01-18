import DeliveryItem from '../DeliveryItem/DeliveryItem';
import './OverviewCard.scss';
import { useState, useEffect } from 'react';


function OverviewCard({openModal}) {
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
        <section className="overview">
            <div className="overview__card">
                
                <div className="overview__one">
                    <h3 className="overview__heading">Upcoming deliveries</h3>
                    <div className="deliveryinfo__heading">
                        <div className="deliveryinfo__part">
                            <p className="deliveryinfo__label">Date & Address</p>
                        </div>
                        <div className="deliveryinfo__part">
                            <p className="deliveryinfo__label">Delivery Time</p>
                        </div>
                        <div className="deliveryinfo__part">
                            <p className="deliveryinfo__label">Quantity</p>
                        </div>
                        <div className="deliveryinfo__part">
                            <p className="deliveryinfo__label">Status</p>
                        </div>
                        <div className="deliveryinfo__part">
                            <p className="deliveryinfo__label">Update</p>
                        </div>
                    </div>
                    {isLoading ? (
                        <p>Loading deliveries...</p>
                    ) : error ? (
                        <p className="overview__error">{error}</p>
                    ) : deliveries.length === 0 ? (
                        <p>No upcoming deliveries.</p>
                    ) : (
                        <ul className="overview__list">
                            {deliveries.map((delivery) => (
                                <li key={delivery.id} className="overview__item">
                                    <DeliveryItem delivery={delivery} openModal={openModal} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="overview__metrics">
                <div className="overview__total">
                    <h4 className="overview__subheading">total deliveries</h4>

                </div>
                <div className="overview__total">
                    <h4 className="overview__subheading">litres of milk delivered</h4>
                    
                </div>
            </div>
        </section>
    )
}

export default OverviewCard;