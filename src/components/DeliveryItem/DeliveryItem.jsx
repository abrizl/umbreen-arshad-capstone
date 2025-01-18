import './DeliveryItem.scss';
import milkotovBottle from "../../assets/images/milkotov-Bottle-01.svg";
import { UNSAFE_getPatchRoutesOnNavigationFunction } from 'react-router-dom';

function DeliveryItem({delivery, openModal, fetchDeliveries}) {
    const formatDate = (dateString) => {
        const options = { month: 'short', day: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options).replace(',', '');
    };

    return(
        <section className="deliveryinfo">
            <div className="deliveryinfo__area">
                <div className="deliveryinfo__section">
                    <img src={milkotovBottle} alt='milkotov milk bottle' className='deliveryinfo__bottle'/>
                    
                    <div className="deliveryinfo__box">
                        <div className="deliveryinfo__date">
                            {formatDate(delivery.scheduled_date)}
                        </div>

                        <div className="deliveryinfo__address">
                            {delivery.address}
                        </div>
                    </div>
                </div>

                <div className="deliveryinfo__slot">
                    {delivery.delivery_slot}
                </div>

                <div className="deliveryinfo__quantity">
                    {delivery.quantity}L
                </div>

                <div className="deliveryinfo__status">
                    {delivery.status}
                </div>

                <div className="deliveryinfo__status">
                    <button onClick={() => openModal(delivery.id)} className="deliveryinfo__editbutton">Edit</button>
                </div>

            </div>
        </section>
    )
}

export default DeliveryItem;