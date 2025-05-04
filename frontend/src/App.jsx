import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginBox from "./LoginBox/LoginBox";
import SignUpPage from "./Signup/SignUp"; 
import ListRentalProperty from "./ListRentalProperty/ListRentalProperty";
import Menu from "./Menu/Menu";
import ViewRentalProperty from "./ViewRentalProperty/ViewRentalProperty";
import SearchRentalResults from "./SearchRentalResults/SearchRentalResults";
import Queries from "./Queries/Queries";
import MostExpensiveProperty from "./MostExpensiveProperty/MostExpensiveProperty";
import UserReportsPage from './UserReports/UserReportsPage';

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
                <Route path = '/rentals/most-expensive' element = {<MostExpensiveProperty/>} />
                <Route path="/user-reports" element={<UserReportsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
