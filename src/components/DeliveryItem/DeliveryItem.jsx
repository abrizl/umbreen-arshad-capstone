import './DeliveryItem.scss';
import milkotovBottle from "../../assets/images/milkotov-Bottle-01.svg";

function DeliveryItem({delivery}) {
    const formatDate = (dateString) => {
        const options = { month: 'short', day: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options).replace(',', '');
    };

    return(
        <section className="deliveryinfo">
            <div className="deliveryinfo__area">
                <img src={milkotovBottle} alt='milkotov milk bottle' className='deliveryinfo__bottle'/>
                
                <div className="deliveryinfo__box">
                    <div className="deliveryinfo__date">
                        {formatDate(delivery.scheduled_date)}
                    </div>

                    <div className="deliveryinfo__address">
                        {delivery.address}
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

            </div>
        </section>
    )
}

export default DeliveryItem;