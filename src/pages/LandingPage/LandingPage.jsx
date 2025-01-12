import './LandingPage.scss';
import banner from '../../assets/images/Continuous Banner-01.png';


function LandingPage() {
    return (

        <section className="page">
            
            <section className="landing">
                <img src={banner} alt="milk pour on dark background" className="landing__image"/> 
                <div className="landing__overlay">
                    <p className="landing__heading">farm fresh</p>
                </div>
            </section>

            <section className="why">
                <div className="why__two">
                    <div className="why__item">
                        <p className="landing__description">from udders to bottle</p>
                    </div>
                    <div className="why__item">
                        <p className="why__topText">100%</p>
                        <p className="why__under">fresh, whole milk</p>
                    </div>
                </div>

                <div className="why__two">
                    <div className="why__item">
                        <p className="why__under">delivered twice</p>
                        <p className="why__topText">daily</p>
                    </div>
                    <div className="why__item">
                        <p className="why__description">as per your needs and schedule</p>
                    </div>
                </div>

                <div className="why__two">
                    <div className="why__item">
                        <p className="why__description">we work with local farms to ensure quality and fair trade </p>
                    </div>
                    <div className="why__item">
                        <p className="why__under">support</p>
                        <p className="why__topText">local</p>
                    </div>
                </div>

                <div className="why__two">
                    <div className="why__item">
                        <p className="why__under">ditch the</p>
                        <p className="why__topText">plastic</p>
                    </div>
                    <div className="why__item">
                        <p className="why__description">join our efforts to reduce single-use plastics </p>
                    </div>
                </div>
            </section>
            
        </section>
    )
}

export default LandingPage;