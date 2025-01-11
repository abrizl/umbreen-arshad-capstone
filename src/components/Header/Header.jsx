import './Header.scss';
import milkotovLogo from '../../assets/Milkotov-wordmark.svg';

function Header() {
    return (
        <section className="header">
            <img src={milkotovLogo} alt="Milkotov logo" className="header__logo"/>
            <div className="header__navigation">
                <p className="header__link">Home</p>
                <p className="header__link">About Us</p>
                <p className="header__link">Contact Us</p>
                <button className="header__button">Schedule a Delivery</button>
            </div>
        </section>
    )
};

export default Header;