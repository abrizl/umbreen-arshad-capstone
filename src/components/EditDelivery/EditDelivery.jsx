import './EditDelivery.scss';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

function EditDelivery({deliveryId, onClose, fetchDeliveries}) {
    const [deliveryData, setDeliveryData] = useState(null);
    const [deliveryDates, setDeliveryDates] = useState([new Date(), new Date()]);
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        deliveryArea: '',
        deliveryTime: [],
        quantity: 1,
    });
    const [canCancel, setCanCancel] = useState(false);


    useEffect(() => {
        async function fetchDelivery() {
            try {
                const response = await axios.get(`http://localhost:5000/api/deliveries/${deliveryId}`);
                const data = response.data;
                console.log(response.data);

                setDeliveryData(data);
                setFormData({
                    address: data.address,
                    city: data.city_id,
                    deliveryArea: data.area_id,
                    deliveryTime: data.delivery_slot ? [data.delivery_slot] : [],
                    quantity: data.quantity,
                });
                setDeliveryDates([new Date(data.scheduled_date), new Date(data.scheduled_date)]);
            
                const deliveryDate = new Date(data.scheduled_date);
                const now = new Date();
                const timeDifference = deliveryDate.getTime() - now.getTime();

                if (timeDifference > 24 * 60 * 60 * 1000 && data.status === 'Pending') {
                    setCanCancel(true);
                } else {
                    setCanCancel(false);
                }
            
            
            } catch (error) {
                console.error('Error fetching delivery data:', error);
            }
        }

        if (deliveryId) fetchDelivery();
    }, [deliveryId]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            if (checked) {
                return { ...prevData, deliveryTime: [...prevData.deliveryTime, value] };
            } else {
                return {
                    ...prevData,
                    deliveryTime: prevData.deliveryTime.filter(time => time !== value),
                };
            }
        });
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1) {
            setFormData((prevData) => ({
                ...prevData,
                quantity: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedDates = deliveryDates.map(date => date.toISOString().split('T')[0]);

        const updatedDelivery = {
            address: formData.address,
            area_id: formData.deliveryArea,  
            city_id: formData.city,          
            delivery_slot: formData.deliveryTime,
            scheduled_dates: formattedDates,
            quantity: formData.quantity,
        };

        try {
            await axios.put(`http://localhost:5000/api/deliveries/${deliveryId}`, updatedDelivery);
            alert('Delivery updated successfully!');
            fetchDeliveries();
            onClose();
        } catch (err) {
            console.error('Error updating delivery:', err);
            alert('Error updating delivery. Please try again.');
        }
    };

    const handleCancelDelivery = async () => {
        if (!window.confirm('Are you sure you want to cancel this delivery?')) return;

        try {
            await axios.delete(`http://localhost:5000/api/deliveries/${deliveryId}`);
            alert('Delivery canceled successfully.');
            fetchDeliveries();
            onClose();
        } catch (err) {
            console.error('Error canceling delivery', err);
            alert('Error canceling delivery. Please call our customer service team for assistance.');
        }
    };

    if (!deliveryData) return <p>Loading...</p>;

    return (
        <section className="edit">
            <h2 className='edit__heading'>Edit Delivery</h2>
            <form onSubmit={handleSubmit} className="edit__form">
                {/* Address */}
                <div className="edit__item">
                    <label htmlFor="address" className="edit__label">Address:</label>
                    <input
                        type="text"
                        id="address"
                        className="edit__input"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Delivery Date */}
                <div className="edit__item">
                    <label className="edit__label">Delivery Date:</label>
                    <DatePicker
                        selectsRange
                        startDate={deliveryDates[0]}
                        endDate={deliveryDates[1]}
                        onChange={(update) => setDeliveryDates(update)}
                        isClearable={true}
                        minDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                        className="edit__input"
                    />
                </div>

                {/* Delivery Time */}
                <div className="edit__item">
                    <p className="edit__label">Delivery Time:</p>
                    <div className="edit__checkboxes">
                        <label className='edit__checkarea'>
                            <input
                                type="checkbox"
                                value="Morning"
                                checked={formData.deliveryTime.includes('Morning')}
                                onChange={handleCheckboxChange}
                            />
                            Morning (8am - 10am)
                        </label>
                        <label className='edit__checkarea'>
                            <input
                                type="checkbox"
                                value="Evening"
                                checked={formData.deliveryTime.includes('Evening')}
                                onChange={handleCheckboxChange}
                            />
                            Evening (6pm - 8pm)
                        </label>
                    </div>
                </div>

                {/* Quantity */}
                <div className="edit__item">
                    <label htmlFor="quantity" className="edit__label">Quantity (Litres):</label>
                    <input
                        type="number"
                        id="quantity"
                        className="edit__input"
                        min="1"
                        value={formData.quantity}
                        onChange={handleQuantityChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="edit__button">Update Delivery</button>
                <button type="button" onClick={onClose} className="edit__button edit__button--cancel">Close</button>
  
                {/* Cancel Delivery Button */}
                    {canCancel && (
                        <button type="button" onClick={handleCancelDelivery} className="edit__button edit__button--delete">
                            Cancel Delivery
                        </button>
                    )}
            
            </form>
        </section>
    );
}

export default EditDelivery;