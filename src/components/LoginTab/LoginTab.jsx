import './LoginTab.scss';
import accountIcon from '../../assets/icons/Account.svg';

function LoginTab() {
    return (
        <section className="container">
            <img src={accountIcon} alt="Sign in icon" className='container__icon'/>
            <span className="container__heading">Sign In</span>
        </section>
    )
}

export default LoginTab;