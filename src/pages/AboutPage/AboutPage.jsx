import './AboutPage.scss';
import milkotovIcon from "../../assets/icons/milkotovIcon-01.svg";

function AboutPage() {
    return (
        <section className="about">
            <div className="about__area">
                <h2 className="about__name">milkotov</h2> 
                <h4 className="about__pronounciation">ˈmɪl.koʊ.tɔv</h4> 
            </div>

            <p className="about__subtitle">born from necessity </p>    


            <div className="about__why">
                <p className="about__text">each bottle of milkotov is a bold symbol of rebellion against contaminated milk -- much like the molotov cocktails used throughout history to rebel against oppression.</p>    
                <p className="about__text">we promise uncontaminated milk ready for consumption without fear. Suitable for everyone; your little ones switching to whole milk or your teens entering their growing years. </p>    
            </div>

            <div className="about__container">
                <div className="about__mission">
                    <div className="about__line"></div>
                    <img src={milkotovIcon} alt="milkotov icon" className='about__image'/>
                    <h3 className="about__subheading">Quality Assurance & Sourcing</h3>
                    <p className="about__detail">We source our milk from our own local farm. Our buffaloes are grass-fed and never given hormones, antibiotics, or injections for milk production.</p>
                </div>

                <div className="about__mission">
                    <div className="about__line"></div>
                    <img src={milkotovIcon} alt="milkotov icon" className='about__image'/>
                    <h3 className="about__subheading">Nutritional Benefits</h3>
                    <p className="about__detail">Our vision is to maintain essential nutrients and supply 100% unadulterated whole milk for strong bones and healthy growth.</p>
                </div>

                <div className="about__mission">
                    <div className="about__line"></div>
                    <img src={milkotovIcon} alt="milkotov icon" className='about__image'/>
                    <h3 className="about__subheading">Sustainability Focused</h3>
                    <p className="about__detail">We believe in protecting what nourishes us. That’s why Milkotov supports sustainable farming and uses eco-friendly packaging to reduce our environmental footprint.</p>
                </div>

                <div className="about__mission">
                    <div className="about__line"></div>
                    <img src={milkotovIcon} alt="milkotov icon" className='about__image'/>
                    <h3 className="about__subheading">Join the movement</h3>
                    <p className="about__detail">Choose milk that fights for purity.</p>
                    <button className="about__button">
                        Schedule your delivery!
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;