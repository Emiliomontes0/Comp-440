import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginBox from "./LoginBox/LoginBox";
import SignUpPage from "./Signup/SignUp"; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginBox />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
}

export default App;
