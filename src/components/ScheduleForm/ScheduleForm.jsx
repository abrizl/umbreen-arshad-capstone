import './ScheduleForm.scss';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { fetchCities, fetchAreasByCity, scheduleDelivery } from '../../services/api';
import DatePicker from 'react-datepicker';
import dropDownIcon from "../../assets/icons/arrow_drop_down-24px.svg";
import "react-datepicker/dist/react-datepicker.css";


function ScheduleForm({ cities, areas, selectedCity, setSelectedCity }) {
    const [selectedArea, setSelectedArea] = useState('');
    const [deliveryDates, setDeliveryDates] = useState([new Date(), new Date()]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        deliveryArea: '',
        deliveryTime: []
    });

    useEffect(() => {
        if (formData.city) {
            fetchAreasByCity(formData.city)
                .then(data => setSelectedArea(data))
                .catch(err => console.error('Error fetching areas:', err));
        }
    }, [formData.city]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleCityChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            city: e.target.value,
            deliveryArea: ''
        }));
    };

    const handleSelectChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            deliveryArea: e.target.value
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
                    deliveryTime: prevData.deliveryTime.filter(time => time !== value)
                };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Format multiple dates for backend submission
        const formattedDates = deliveryDates.map(date => date.toISOString().split('T')[0]);

        const deliveryData = {
            area_id: formData.deliveryArea,
            delivery_slot: formData.deliveryTime,
            scheduled_dates: formattedDates,
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone,
            address: formData.address
        };

        try {
            await scheduleDelivery(deliveryData);
            alert('Delivery scheduled successfully!');

            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                deliveryArea: '',
                deliveryTime: []
              });
          
              setSelectedCity('');             // Reset city dropdown
              setSelectedArea('');             // Reset area dropdown
              setDeliveryDates([new Date(), new Date()]); 
        } catch (err) {
            console.error('Error scheduling delivery:', err);
            alert('Error scheduling delivery. Please try again.');
        }
    };

    return (
        <section className="form">
            <form onSubmit={handleSubmit} className='form__area'>
                {/* User Info */}
                <div className="contact__item">
                    <label htmlFor="name" className="contact__label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="contact__form"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="contact__item">
                    <label htmlFor="email" className="contact__label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="contact__form"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="contact__item">
                    <label htmlFor="phone" className="contact__label">Phone number:</label>
                    <input
                        type="tel"
                        id="phone"
                        className="contact__form"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="contact__item">
                    <label htmlFor="address" className="contact__label">Address:</label>
                    <input
                        type="text"
                        id="address"
                        className="contact__form"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* City Dropdown */}
                <div className="form__location">
                    <label htmlFor="city" className="contact__label">City</label>
                    <select
                        id="city"
                        value={formData.city}
                        onChange={handleCityChange}
                        required
                        className="contact__form"
                    >
                        <option value="" disabled>Select City</option>
                        {cities.map(city => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                    </select>
                </div>

                {/* Area Dropdown */}
                <div className="form__location">
                    <label htmlFor="deliveryArea" className="contact__label">Delivery Area</label>
                    <select
                        id="deliveryArea"
                        value={formData.deliveryArea}
                        onChange={handleSelectChange}
                        required
                        className="contact__form"
                    >
                        <option value="" disabled>Select Area</option>
                        {Array.isArray(selectedArea) && selectedArea.map(area => (
                            <option key={area.id} value={area.id}>{area.name}</option>
                        ))}
                    </select>
                </div>

                {/* Date Range Picker */}
                <div className="form__date-picker">
                    <label className="contact__label">Delivery Date</label>
                    <DatePicker
                        selectsRange
                        startDate={deliveryDates[0]}
                        endDate={deliveryDates[1]}
                        onChange={(update) => setDeliveryDates(update)}
                        isClearable={true}
                        minDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                        className="contact__form"
                    />
                </div>

                
                {/* Delivery Time Slots */}
                <div className="form__checkbox">
                    <p className="contact__label">Delivery Time</p>
                    <label className='form__checkarea'>
                        <input
                            type="checkbox"
                            name="deliveryTime"
                            value="Morning"
                            checked={formData.deliveryTime.includes('Morning')}
                            onChange={handleCheckboxChange}
                        />
                        Morning - 8am to 10am
                    </label>

                    <label className='form__checkarea'>
                        <input
                            type="checkbox"
                            name="deliveryTime"
                            value="Evening"
                            checked={formData.deliveryTime.includes('Evening')}
                            onChange={handleCheckboxChange}
                        />
                        Evening - 6pm to 8pm
                    </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="form__button">Submit</button>
            </form>
        </section>
    );
}

export default ScheduleForm;