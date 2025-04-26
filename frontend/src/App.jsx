import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginBox from "./LoginBox/LoginBox";
import SignUpPage from "./Signup/SignUp"; 
import ListRentalProperty from "./ListRentalProperty/ListRentalProperty";
import Menu from "./Menu/Menu";
import ViewRentalProperty from "./ViewRentalProperty/ViewRentalProperty";
import SearchRentalResults from "./SearchRentalResults/SearchRentalResults";
import Queries from "./Queries/Queries";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginBox />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/view-rentals" element={<ViewRentalProperty />} />
                <Route path="/place-rentals" element={< ListRentalProperty />} />
                <Route path="/search-rentals" element={< SearchRentalResults />} />
                <Route path= "/view-queries" element={<Queries />} />
            </Routes>
        </Router>
    );
}

export default App;
