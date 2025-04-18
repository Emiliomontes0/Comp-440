import React, {useEffect, useState} from 'react';
import './ViewRentalProperty.css'
import {useNavigate} from 'react-router-dom';

function ViewRentalProperty (){
    const [rentals,setRentals] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRentals = async () => {

            try{
                const response = await fetch('http://localhost:4000/api/rentals');
                const data = await response.json();

                if (!response.ok){
                    setError(data.error || 'Cannot see rentals')
                    return;
                }

                setRentals(data);

            } catch(err){
                setError('An error occurred. Please try again.')
            }
        };

        fetchRentals();
    }, []);

    return (
        <div className = "rental-list">
            {rentals.map((rental) => (
                <div key={rental.id} className='rental-show'>
                    <h3>{rental.title}</h3>
                    <p>Description:{rental.description}</p>
                    <p>Features: {rental.features.join(', ')}</p>
                    <p><strong>${rental.price}</strong></p>
                </div>
                ))}
                
                <button onClick={() => navigate('/menu')} className="back-button-view">
                    Back to Menu
                </button>

        </div>
        
    );
}

export default ViewRentalProperty;