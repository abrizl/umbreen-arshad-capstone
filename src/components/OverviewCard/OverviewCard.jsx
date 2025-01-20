import DeliveryItem from '../DeliveryItem/DeliveryItem';
import './OverviewCard.scss';
import { useState, useEffect } from 'react';
import milkbottleWhite from '../../assets/images/Milkotov-Bottle-White.svg';


function OverviewCard({openModal, deliveries, isLoading, error, userInfo, userError}) {
    const pendingDeliveries = deliveries.filter(delivery => delivery.status === 'Pending');

    const deliveredCount = deliveries.filter(delivery => delivery.status === 'Delivered').length;

    console.log(userInfo);

    return(
        <section className="overview">

            <div className="overview__top">
                <div className="overview__metrics">
                    <div className="overview__iconContainer">
                        <svg className='overview__icon' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1000">
                            <path class="cls-1" d="M1206.69,532.3h158.92c17.98,0,32.61-14.63,32.61-32.61v-18.98c0-6.27-1.79-12.36-5.17-17.64l-68.73-106.93c-12.74-19.85-34.45-31.69-58.03-31.69h-59.6c-13.93,0-25.25,11.32-25.25,25.25v157.35c0,13.93,11.32,25.25,25.25,25.25ZM1266.29,349.93c14.87,0,28.56,7.46,36.59,20l68.73,106.93c.75,1.14,1.14,2.49,1.14,3.86v18.98c0,3.93-3.21,7.14-7.14,7.14l-158.7.22-.22-157.13h59.6Z"/>
                            <path class="cls-1" d="M1640.57,572.2l-191.55-297.99c-31.37-48.73-84.65-77.81-142.55-77.81h-166.06c-26.24,0-47.61,21.37-47.61,47.61v438.45c0,7.43,1.89,14.62,5.15,21.17-24.46,26.98-39.5,62.64-39.5,101.83,0,6.79.6,13.42,1.47,19.97h-404.62c.87-6.55,1.47-13.19,1.47-19.97,0-27.45-7.42-53.15-20.21-75.39h330.11c32.76,0,59.42-26.66,59.42-59.42V158.65c0-32.76-26.66-59.4-59.42-59.4H228.08c-43.83,0-79.47,35.64-79.47,79.47v605.88c0,36.56,29.75,66.31,66.29,66.31h144.96c19.37,61.64,77.02,106.49,144.97,106.49s125.61-44.84,144.97-106.49h415.6c19.37,61.64,77.02,106.49,144.97,106.49s125.61-44.84,144.97-106.49h229.75c36.54,0,66.29-29.75,66.29-66.31v-175.53c0-13.11-3.76-25.84-10.82-36.86ZM174.08,617.7V178.72c0-29.77,24.23-54,54-54h738.58c18.73,0,33.95,15.22,33.95,33.93v512c0,18.73-15.22,33.95-33.95,33.95h-348.53c-27.85-31.25-68.26-51.07-113.31-51.07s-85.46,19.82-113.31,51.07h-183.49c-18.73,0-33.95-15.22-33.95-33.95v-52.96ZM352.9,805.47c0,6.79.6,13.42,1.47,19.97h-139.47c-22.51,0-40.82-18.33-40.82-40.84v-65.31c9.64,6.75,21.32,10.79,33.95,10.79h165.07c-12.78,22.25-20.21,47.95-20.21,75.39ZM504.83,931.93c-69.72,0-126.46-56.74-126.46-126.46s56.74-126.46,126.46-126.46,126.46,56.74,126.46,126.46-56.74,126.46-126.46,126.46ZM1118.27,244.02c0-12.21,9.92-22.14,22.14-22.14h166.06c49.2,0,94.5,24.72,121.11,66.11l191.55,297.99c2.08,3.23,3.61,6.73,4.74,10.35h-46.78c-15.15,0-27.46,12.31-27.46,27.46v13.76c0,15.15,12.31,27.46,27.46,27.46h48.51c-1.63,22.08-19.9,39.6-42.39,39.6h-259.53c-27.85-31.25-68.26-51.07-113.31-51.07-34.47,0-66.2,11.67-91.72,31.1-.07-.74-.39-1.42-.39-2.17V244.02ZM1210.38,931.93c-69.72,0-126.46-56.74-126.46-126.46s56.74-126.46,126.46-126.46,126.46,56.74,126.46,126.46-56.74,126.46-126.46,126.46ZM1625.92,784.6c0,22.51-18.31,40.84-40.82,40.84h-224.26c.87-6.55,1.47-13.19,1.47-19.97,0-27.45-7.42-53.15-20.21-75.39h241.11c16.24,0,30.98-5.95,42.71-15.48v70ZM1625.92,639.54h-48.83c-1.09,0-1.99-.9-1.99-1.99v-13.76c0-1.09.9-1.99,1.99-1.99h48.83v17.74Z"/>
                            <path class="cls-1" d="M587.36,578.94c100.96,0,183.12-82.16,183.12-183.15s-82.16-183.15-183.12-183.15-183.15,82.16-183.15,183.15,82.16,183.15,183.15,183.15ZM587.36,238.12c86.93,0,157.65,70.74,157.65,157.68s-70.72,157.68-157.65,157.68-157.68-70.74-157.68-157.68,70.74-157.68,157.68-157.68Z"/>
                            <path class="cls-1" d="M577.09,435.99c2.24,3.08,5.75,5,9.58,5.2.22.02.47.02.7.02,3.56,0,6.96-1.49,9.38-4.13l59.9-65.37c4.78-5.2,4.4-13.23-.77-17.98-5.12-4.78-13.26-4.4-17.98.77l-49.4,53.9-11.86-16.22c-4.15-5.7-12.14-6.92-17.78-2.76-5.67,4.13-6.91,12.11-2.76,17.78l21.02,28.78Z"/>
                        </svg>
                    </div>
                    <div className="_overview__information">
                        <p className="overview__metric">{deliveredCount}</p>
                        <p className="overview__subheading">completed deliveries</p>
                    </div>
                </div>
                
                <div className="overview__metrics">

                    <div className="overview__iconContainer">
                        <img src={milkbottleWhite} alt="milkotov bottle" className='overview__bottleIcon'/>
                    </div>
                    <div className="_overview__information">
                        <p className="overview__metric">
                            {deliveries
                                .filter(delivery => delivery.status === 'Delivered')
                                .reduce((sum, delivery) => sum + delivery.quantity, 0)}
                        </p>
                        <p className="overview__subheading">litres of milk delivered</p>
                    </div>
                </div>

                <div className="overview__metrics">

                    <div className="overview__iconContainer">
                        <img src={milkbottleWhite} alt="milkotov bottle" className='overview__bottleIcon'/>
                    </div>
                    <div className="_overview__information">
                        <p className="overview__metric">
                            220 Rs.
                        </p>
                        <p className="overview__subheading">current rate of milk/L</p>
                    </div>
                </div>

            </div>


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

            <div className="overview__account">
                <h3 className="overview__heading">Account information</h3>
                <div className="overview__details">
                    <h4 className="overview__subheading">Name:</h4>
                    <p className="overview__data">{userInfo.name}</p>
                </div>

                <div className="overview__details">
                    <h4 className="overview__subheading">Email:</h4>
                    <p className="overview__data">{userInfo.email}</p>
                </div>

                <div className="overview__details">
                    <h4 className="overview__subheading">Phone Number:</h4>
                    <p className="overview__data">{userInfo.phone_number}</p>
                </div>
            </div>
        </section>
    )
}

export default OverviewCard;