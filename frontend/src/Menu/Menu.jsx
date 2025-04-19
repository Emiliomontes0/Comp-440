import React, {useState} from 'react';
import { Link,useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';
import './Menu.css';

function Menu() {
    const {user, logoutUser} = useUser();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim() !== ''){
            navigate(`/search-rentals?feature=${encodeURIComponent(searchTerm.trim().toLowerCase())}`);
        }
    };
    
    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    };

    return (
        <div>
            <div className="menu-box">
                <div className="menu-header">
                <h2>Home</h2>
                <h4>Welcome{user && user.firstName ? `, ${user.firstName}` : ""}</h4>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
                
                <ul>
                    <li><Link to="/view-rentals">View Rental Properties</Link></li>
                    <li><Link to="/place-rentals">List Rental Property</Link></li>
                    <li className = "search-bar">
                        <input
                            type ="text"
                            placeholder = "Search by Feature"
                            className='search-input'
                            value = {searchTerm}
                            onChange= {(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch}
                        />

                    </li>
                </ul>
            </div>

            <div className="Pictures">
                <h3></h3>
                <div className="image-gallery">
                    <img src="/images/apartment1.jpg" alt="Apartment 1" />
                    <img src="/images/apartment2.jpg" alt="Apartment 2" />
                    <img src="/images/apartment3.jpg" alt="Apartment 3" />
                </div>
            </div>
        </div>
    );
}

export default Menu;
