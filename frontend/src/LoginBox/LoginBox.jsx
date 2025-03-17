import { Link } from "react-router-dom";

function LoginBox(){
    return(
        <div className = "login-box">
            <h2>
                Sign In
            </h2>

            <h3>
                New Here? <Link to="/signup">Sign Up Today!</Link>
            </h3>

            
            <form action = "#" className = "login-form">
                <div className = "input-wrapper">
                    <label htmlFor="username" className = "input-label">
                        Username
                    </label>
                    <input type = "text" 
                    id = "username"
                    placeholder = "Username"
                    className = "input-field" 
                    required/>
                </div>
            
                <div className = "input-wrapper">
                    <label htmlFor="password" className="input-label">
                        Password
                    </label>
                    <input type = "text" 
                    id = "password"
                    placeholder = "Password"
                    className = "input-field" 
                    required/>
                </div>
            </form>
            <button className = "login-button">
                Log In
            </button>
            
        </div>
    );
}

export default LoginBox