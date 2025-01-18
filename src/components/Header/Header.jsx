import './Header.scss';
import milkotovLogo from '../../assets/Milkotov-wordmark.svg';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <section className="headerContainer">
            <div className="header">
                <Link className='header__name' to='/'>
                    <img src={milkotovLogo} alt="Milkotov logo" className="header__logo"/>
                </Link>
                <div className="header__navigation">
                    <Link to= "/" className="header__link">Home</Link>
                    <Link to= "/about" className="header__link">About</Link>
                    <Link to= "/contact" className="header__link">Contact</Link>
                    <button className="header__button">Schedule a Delivery</button>
                </div>
            </div>
        </section>
    )
};

export default Header;