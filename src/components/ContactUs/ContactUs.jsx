import './ContactUs.scss';
import { useState } from 'react';

function ContactUs() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);


        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });

        // Add logic to send data to a backend API
    };

    return (
        <section className="contact">
            <div className="contact__main">
                <div className="contact__left">
                    <h2 className="contact__title">Get in touch</h2>
                </div>
                
                <form className="contact__formArea" onSubmit={handleSubmit}>
                    <div className="contact__item">
                        <label htmlFor="name" className="contact__label">Name:</label>
                        <input type="text" id="name" className="contact__form" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="contact__item">
                        <label htmlFor="email" className="contact__label">Email:</label>
                        <input type="email" id="email" className="contact__form" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="contact__item">
                        <label htmlFor="phone" className="contact__label">Phone number:</label>
                        <input type="tel" id="phone" className="contact__form" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="contact__item">
                        <label htmlFor="message" className="contact__label">Message:</label>
                        <textarea name="message" id="message" className="contact__message" value={formData.message} onChange={handleChange} required/>
                    </div>
                    <button className="contact__button">Send</button>
                </form>
            </div>
            <div className="contact__subtitle">
                <p className="contact__item">for immediate assistance:</p>
                <p className="contact__item">0303 726 9675</p>
            </div>
        </section>
    )
}

export default ContactUs;