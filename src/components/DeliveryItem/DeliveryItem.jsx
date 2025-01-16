import './DeliveryItem.scss';
import milkotovBottle from "../../assets/images/milkotov-Bottle-01.svg";

function DeliveryItem({delivery}) {
    console.log(delivery);
    return(
        <section className="deliveryinfo">
            <div className="deliveryinfo__area">
                <img src={milkotovBottle} alt='milkotov milk bottle' className='deliveryinfo__bottle'/>
                <div className="deliveryinfo__address">
                    {delivery.address}
                </div>

                <div className="deliveryinfo__slot">
                    {delivery.delivery_slot}
                </div>

                <div className="deliveryinfo__quantity">
                    {delivery.quantity}
                </div>

                <div className="deliveryinfo__date">
                    {delivery.scheduled_date}
                </div>

                <div className="deliveryinfo__satus">
                    {delivery.status}
                </div>

            </div>
        </section>
    )
}

export default DeliveryItem;