import './LandingPage.scss';
import banner from '../../assets/images/Continuous Banner-01.png';
import mBottle from '../../assets/images/mBottle-01.svg';
import dayNight from '../../assets/images/timing-02.svg';


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

                <div className="why__information">
                    <div className="why__itemLeft">
                        <p className="why__underRight">delivering twice</p>
                        <p className="why__topText">daily</p>
                        <p className="why__description2">as per your needs and schedule</p>
                    </div>
                    <div className="why__itemOne">
                        <img src={dayNight} alt="day and night symbols" className="why__imagetwo"/>
                    </div>
                </div>

                <div className="why__information">
                    <div className="why__itemLeft">
                        <p className="why__description">our local farm ensures</p>
                    </div>
                    <div className="why__item">
                        <p className="why__description">our local farm ensures</p>
                        <p className="why__topText">no</p>
                        <p className="why__under">additives</p>
                    </div>
                </div>

                <div className="why__information">
                    <div className="why__itemTwo">
                        <p className="why__underRight">ditch the</p>
                        <p className="why__topText">plastic</p>
                        <p className="why__description2">join our efforts to reduce single-use plastics </p>

                    </div>
                    <div className="why__itemOne">
                        <p className="why__description2">join our efforts to reduce single-use plastics </p>
                    </div>
                </div>
            </section>

            <button onClick={openModal} className="landing__button">
                    Schedule your delivery!
            </button>

        </section>
    )
}

export default LandingPage;