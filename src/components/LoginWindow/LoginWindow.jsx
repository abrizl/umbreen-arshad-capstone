import './LoginWindow.scss';
import { useState } from 'react';
import bcrypt from 'bcryptjs';


function LoginWindow() {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Password confirmation check (only for registration)
        if (isRegister && password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
    
        const endpoint = isRegister 
            ? 'http://localhost:5000/api/auth/register' 
            : 'http://localhost:5000/api/auth/login';
    
        const payload = { email, password };
    
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Save JWT token for session management
                localStorage.setItem('token', data.token);
    
                alert(isRegister ? 'Registration successful!' : 'Login successful!');
                
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                
                // Redirect user after successful login/registration
                window.location.href = '/dashboard'; 
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <section className="window">
            <div className="window__container">
                <div className="window__header">
                    <h2 className="window__heading">{isRegister ? 'Register' : 'Sign in'}</h2>
                    <span className="window__subheading">to manage your deliveries</span>  
                </div>
                
                <form className="window__formArea" onSubmit={handleSubmit}>
                    <div className="window__item">
                        <label htmlFor="email" className="window__label">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="window__form" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="window__item">
                        <label htmlFor="password" className="window__label">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="window__form" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    {isRegister && (
                        <div className="window__item">
                            <label htmlFor="confirmPassword" className="window__label">Confirm Password:</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                className="window__form" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required 
                            />
                        </div>
                    )}
                    <p className="window__line">Forgot password?</p>
                    <button type="submit" className="window__button">
                        {isRegister ? 'Register' : 'Sign In'}
                    </button>
                    <p 
                        className="window__line" 
                        onClick={() => setIsRegister(!isRegister)} 
                        style={{ cursor: 'pointer', color: 'blue' }}
                    >
                        {isRegister ? 'Already have an account? Sign In' : 'Create an account'}
                    </p>
                </form>
            </div>
        </section>
    );
}

export default LoginWindow;