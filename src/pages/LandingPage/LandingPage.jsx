import './LandingPage.scss';
import banner from '../../assets/images/Continuous Banner-01.png';


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
                        <p className="why__description">from udders to bottle</p>
                    </div>
                    <div className="why__itemTwo">
                        <p className="why__topText">100%</p>
                        <p className="why__under">fresh, whole milk</p>
                    </div>
                </div>

                <div className="why__information">
                    <div className="why__itemLeft">
                        <p className="why__underRight">delivered twice</p>
                        <p className="why__topText">daily</p>
                    </div>
                    <div className="why__itemOne">
                        <p className="why__description2">as per your needs and schedule</p>
                    </div>
                </div>

                <div className="why__information">
                    <div className="why__itemLeft">
                        <p className="why__description">we work with local farms to ensure quality and fair trade </p>
                    </div>
                    <div className="why__item">
                        <p className="why__under">support</p>
                        <p className="why__topText">local</p>
                    </div>
                </div>

                <div className="why__information">
                    <div className="why__itemTwo">
                        <p className="why__underRight">ditch the</p>
                        <p className="why__topText">plastic</p>
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