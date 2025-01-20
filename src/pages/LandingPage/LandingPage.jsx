import './LandingPage.scss';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/Continuous Banner-01.png';
import mBottle from '../../assets/images/mBottle-01.svg';
import eveningIcon from '../../assets/images/evening.svg';
import morningIcon from '../../assets/images/morning.svg';
import scheduleIcon from '../../assets/icons/schedule.svg';
import deliveryIcon from '../../assets/icons/door-delivery.svg';
import invoiceIcon from '../../assets/icons/invoice.svg';





function LandingPage({openModal}) {
    return (

        <section className="page">
            
            <section className="landing">
                <img src={banner} alt="milk pour on dark background" className="landing__image"/> 
                <div className="landing__overlay">
                    <p className="landing__subheading">go ahead...</p>
                    <p className="landing__heading">pour a glass</p>

                </div>
            </section>

            <section className="why">
                <div className="why__information">
                    <div className="why__itemLeft">
                        <img src={mBottle} alt="milk bottle with milkotov logo" className="why__image"/>
                    </div>
                    <div className="why__itemTwo">
                        <p className="why__description">from udders to bottle</p>
                        <p className="why__topText">100%</p>
                        <p className="why__under">fresh, whole milk</p>
                    </div>
                </div>

                <div className="why__details">
                    <p className="why__underRight">delivering twice daily</p>
                    <p className="why__description">customizable to your needs and schedule</p>
                    <div className="why__cutout">
                        <div className="why__box">
                            <img src={morningIcon} alt="yellow sunrise" className='why__icon'/>
                            <p className="why__description">morning: between 8am and 10am</p>
                        </div>
                        <div className="why__box">
                            <img src={eveningIcon} alt="gray sunset" className='why__icon'/>
                            <p className="why__description">evening: between 6pm and 8pm</p>
                        </div>
                    </div>
                </div>

                <div className="why__details">
                    <p className="why__underRight">no additives</p>
                    <p className="why__description">our local farm ensures quality and trust</p>
                </div>

                <div className="why__details">
                    <p className="why__underRight">ditch the plastic</p>
                    <p className="why__description">join our efforts to reduce single-use plastics</p>
                </div>

                <div className="why__inset">
                    <h2 className="why__description">How it works</h2>
                    <div className="why__category">
                        <img src={scheduleIcon} alt="schedule" className='why__icons'/>
                        <p className="why__caption">customize your delivery schedule online</p>
                    </div>
                    <div className="why__category">
                        <img src={deliveryIcon} alt="delivery" className='why__icons'/>
                        <p className="why__caption">we deliver to your door</p>
                    </div>
                    <div className="why__category">
                        <img src={invoiceIcon} alt="invoice" className='why__icons'/>
                        <p className="why__caption">receive a monthly invoice</p>
                    </div>
                </div>

                <div className="why__details">
                    <p className="why__underRight">open for delivery</p>
                    <p className="why__description"> in select parts of Rawalpindi and Islamabad</p>
                </div>

            </section>

            <Link to='/schedule-delivery'>
                <button className="landing__button">
                    Check your area now!
                </button>
            </Link> 

        </section>
    )
}

export default LandingPage;