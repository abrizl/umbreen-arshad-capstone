import DeliveryItem from '../DeliveryItem/DeliveryItem';
import './OverviewCard.scss';
import { useState, useEffect } from 'react';
import milkbottleWhite from '../../assets/images/Milkotov-Bottle-White.svg';
import deliveryIcon from '../../assets/icons/deliveryTruck.svg';


function OverviewCard({openModal, deliveries, isLoading, error, userInfo, userError}) {
    const pendingDeliveries = deliveries.filter(delivery => delivery.status === 'Pending');

    const deliveredCount = deliveries.filter(delivery => delivery.status === 'Delivered').length;

    console.log(userInfo);

    return(
        <section className="overview">

            <div className="overview__top">
                <div className="overview__metrics">
                    <div className="overview__iconContainer">
                        <img src={deliveryIcon}/>
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
                        <svg className='overview__iconDollar' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"/></svg>
                    </div>
                    <div className="_overview__information">
                        <p className="overview__metric">
                            220 Rs./L
                        </p>
                        <p className="overview__subheading">current rate of milk</p>
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
                            <p className="deliveryinfo__labelempty">Emptytohelpspa</p>
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
                    {/* <p className="overview__data">{userInfo.name}</p> */}
                </div>

                <div className="overview__details">
                    <h4 className="overview__subheading">Email:</h4>
                    {/* <p className="overview__data">{userInfo.email}</p> */}
                </div>

                <div className="overview__details">
                    <h4 className="overview__subheading">Phone Number:</h4>
                    {/* <p className="overview__data">{userInfo.phone_number}</p> */}
                </div>
            </div>
        </section>
    )
}

export default OverviewCard;