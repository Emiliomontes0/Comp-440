import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginBox from "./LoginBox/LoginBox";
import SignUpPage from "./Signup/SignUp"; 
import Menu from "./Menu/Menu";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginBox />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/view-rentals" element={<div>View Rental Properties </div>} />
                <Route path="/place-rentals" element={<div> List Rental Properties </div>} />
                <Route path="/search-rentals" element={<div> Search </div>} />
            </Routes>
        </Router>
    );
}

export default App;
