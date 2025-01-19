import DeliveryItem from '../DeliveryItem/DeliveryItem';
import './OverviewCard.scss';
import { useState, useEffect } from 'react';


function OverviewCard({openModal, deliveries, isLoading, error}) {
    const pendingDeliveries = deliveries.filter(delivery => delivery.status === 'Pending');

    const deliveredCount = deliveries.filter(delivery => delivery.status === 'Delivered').length;

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
                    ) : pendingDeliveries.length === 0 ? (
                        <p>No upcoming deliveries.</p>
                    ) : (
                        <ul className="overview__list">
                            {pendingDeliveries.map((delivery) => (
                                <li key={delivery.id} className="overview__item">
                                    <DeliveryItem key={delivery.id} delivery={delivery} openModal={openModal} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="overview__metrics">
                <div className="overview__total">
                    <h4 className="overview__subheading">total deliveries</h4>
                    <p className="overview__metric">{deliveredCount}</p>
                </div>
                <div className="overview__total">
                    <h4 className="overview__subheading">litres of milk delivered</h4>
                    <p className="overview__metric">
                        {deliveries
                            .filter(delivery => delivery.status === 'Delivered')
                            .reduce((sum, delivery) => sum + delivery.quantity, 0)} L
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OverviewCard;