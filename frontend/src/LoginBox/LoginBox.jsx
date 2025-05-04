import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './LoginBox.css'; 
import { useUser } from "../context/UserContext";
    
function LoginBox(){
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [statusMessage, setStatusMessage] = useState('');
        const navigate = useNavigate();
        const {loginUser} = useUser();
    
        const handleLogin = async(e) => {
            e.preventDefault();
            if (!username || !password){
                setStatusMessage('Please enter username and password.');
                return;
            }
            try{
                const response = await fetch('http://localhost:4000/api/users/login',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({username,password})
                });
                const data = await response.json();
                if (!response.ok){
                    setStatusMessage(data.message || 'Login failed. Please try again.');
                } else {
                    setStatusMessage('Login succesful!');
                    localStorage.setItem('token', data.token);
                    loginUser(data.user);
                    
                    navigate('/Menu');
                }
            } catch (err) {
                setStatusMessage('An error occurred. Please try again.')
            }
    };
    return(
        <div className = "login-box">
            <h2>
                Sign In
            </h2>

            <h3>
                New Here? <Link to="/signup">Sign Up Today!</Link>
            </h3>

            {statusMessage && (
                <p 
                className={`status-message ${
                    ["failed", "error", "invalid", "doesn't"].some(word =>
                        statusMessage.toLowerCase().includes(word)
                      ) ? "error" : "success"
                }`}
                >
                    {statusMessage}
                </p>
            )}
            
            <form onSubmit={handleLogin} className="login-form">
                <div className="input-wrapper">
                    <label htmlFor="username" className="input-label">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="input-field" 
                        required 
                    />
                </div>

            
                <div className="input-wrapper">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="input-field" 
                        required 
                    />
                </div>

                <button type="submit" className="login-button">Log In</button>
            </form>
        </div>
    );
}

export default LoginBox