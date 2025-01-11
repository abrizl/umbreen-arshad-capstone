import './LandingPage.scss';
import banner from '../../assets/images/Continuous Banner-01.png';


function LandingPage() {
    return (
        <section className="landing">
            <div className="landing__hero">
                <img src={banner} alt="milk pour on dark background" className="landing__image"/> 
                <p className="landing__heading">farm fresh milk delivered daily</p>
            </div>
            
        </section>
    )
}

export default LandingPage;