import './LandingPage.scss';
import banner from '../../assets/images/Milk-Banner-Continuous-01.png';
import banner2 from '../../assets/images/Milk-Banner-Continuous-02.png';


function LandingPage() {
    return (
        <section className="landing">
            <div className="landing__hero">
                <img src={banner} alt="milk pour on dark background" className="landing__image"/> 
            </div>
            <div className="landing__second">
                <img src={banner2} alt="milk pour on dark background" className="landing__image"/>    

            </div>
        </section>
    )
}

export default LandingPage;