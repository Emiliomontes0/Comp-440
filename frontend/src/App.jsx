import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginBox from "./LoginBox/LoginBox";
import SignUpPage from "./Signup/SignUp"; 
import ListRentalProperty from "./ListRentalProperty/ListRentalProperty";
import Menu from "./Menu/Menu";
import ViewRentalProperty from "./ViewRentalProperty/ViewRentalProperty";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginBox />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/view-rentals" element={<ViewRentalProperty />} />
                <Route path="/place-rentals" element={< ListRentalProperty />} />
                <Route path="/search-rentals" element={<div> Search </div>} />
            </Routes>
        </Router>
    );
}

export default App;
