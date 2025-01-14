import './ScheduleForm.scss';
import { useState } from 'react';
import dropDownIcon from "../../assets/icons/arrow_drop_down-24px.svg";


function ScheduleForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        deliveryArea: '',
        deliveryTime: []
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add submission logic here (e.g., send data to an API)
    };

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
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
                    />
                </div>

                <div className="form__location">
                    <label htmlFor="deliveryArea" className="form__name">
                        Select a delivery area
                    </label>
                    <div className="form__dropdownContainer">
                        <img src={dropDownIcon} alt="dropdown icon" className="availability__icon" />
                        <select 
                            id="deliveryArea" 
                            value={formData.deliveryArea} 
                            onChange={handleSelectChange} 
                            required
                        >
                            <option value="" disabled>Please select</option>
                            <option value="Downtown">Downtown</option>
                            <option value="Suburbs">Suburbs</option>
                            <option value="Outskirts">Outskirts</option>
                        </select>
                    </div>
                </div>

                <div className="form__checkbox">
                    <label className="form__label">
                        <input 
                            type="checkbox" 
                            name="deliveryTime" 
                            value="Morning" 
                            checked={formData.deliveryTime.includes('Morning')} 
                            onChange={handleCheckboxChange} 
                        />
                        Morning - 8am to 10am
                    </label>

                    <label className="form__label">
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

                <button type="submit" className="form__submit">Submit</button>
            </form>
        </section>
    );
}

export default ScheduleForm;
