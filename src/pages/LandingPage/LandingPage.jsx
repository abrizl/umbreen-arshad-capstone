import './LandingPage.scss';
import banner from '../../assets/images/Continuous Banner-01.png';


function LandingPage() {
    return (
        <section className="landing">
            <div className="landing__container">
                <img src={banner} alt="milk pour on dark background" className="landing__image"/> 
                <div className="landing__overlay">
                    <p className="landing__heading">farm fresh</p>
                </div>
            </div>

            <div className="landing__two">
                <div className="landing__item">
                    <p className="landing__description">from the udders into the bottle</p>
                </div>
                <div className="landing__item">
                    <p className="landing__topText">100%</p>
                    <p className="landing__under">fresh, whole milk</p>
                </div>
                
            </div>

            <div className="landing__two">
                <div className="landing__item">
                    <p className="landing__under">delivered</p>
                    <p className="landing__topText">daily</p>
                </div>
                <div className="landing__item">
                    <p className="landing__description">fresh from the farm, to your door</p>
                </div>
            </div>

            <div className="landing__two">
                <div className="landing__item">
                    <p className="landing__description">we work with local farms to ensure quality and fair trade </p>
                </div>
                <div className="landing__item">
                    <p className="landing__under">support</p>
                    <p className="landing__topText">local</p>
                </div>
            </div>

            <div className="landing__two">
                <div className="landing__item">
                    <p className="landing__under">ditch the</p>
                    <p className="landing__topText">plastic</p>
                </div>
                <div className="landing__item">
                    <p className="landing__description">join our efforts to reduce single-use plastics </p>
                </div>
            </div>
            
        </section>
    )
}

export default LandingPage;