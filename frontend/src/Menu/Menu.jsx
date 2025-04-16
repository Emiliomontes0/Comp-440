import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

function Menu() {

    //Get first and Last name
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    return (
        <div>
            <div className="menu-box">
                <h2>Home</h2>
                <ul>
                    <li><Link to="/view-rentals">View Rental Properties</Link></li>
                    <li><Link to="/place-rentals">List Rental Property</Link></li>
                    <li className = "search-bar">
                        <Link to = "/search-rentals"></Link>
                        <input
                            type ="text"
                            placeholder = "Search"
                            className='search-input'
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
