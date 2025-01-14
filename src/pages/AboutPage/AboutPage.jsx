import './AboutPage.scss';

function AboutPage() {
    return (
        <section className="about">
            <div className="about__area">
                <h2 className="about__name">milkotov</h2>    
                <p className="about__subtitle">born from necessity </p>    

            </div>

            <div className="about__why">
                <p className="about__text">each bottle of milkotov is a bold symbol of rebellion against contaminated milk -- much like the molotov cocktails used throughout history to rebel against oppression.</p>    
                <p className="about__text">we promise uncontaminated milk that can be consumed without fear. Suitable for your little ones switching to whole milk from formula or your teens entering their growing years. </p>    

            </div>
        </section>
    )
}

export default AboutPage;