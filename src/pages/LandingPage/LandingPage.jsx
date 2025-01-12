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
                    <p className="landing__topText">100%</p>
                    <p className="landing__under">fresh, whole milk</p>
                </div>
                <div className="landing__item">
                    <p className="landing__description">from the udders into the bottle</p>
                </div>

            </div>
            
        </section>
    )
}

export default LandingPage;