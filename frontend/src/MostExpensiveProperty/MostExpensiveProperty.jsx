import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './MostExpensiveProperty.css';

function MostExpensiveProperty() {
    const [rentals, setRentals] = useState([]);
    const [error, setError] = useState('');
    const [mostExpensiveRentals, setMostExpensiveRentals] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchMostExpensiveRental = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/rentals/most-expensive');
          const data = await response.json();
  
          if (!response.ok) {
            setError(data.error || 'Cannot get most expensive rentals');
            return;
          }
          
  
          
          const rentalGroups = {};
  
          data.forEach((rental) => {
            rental.features.forEach((feature) => {
              if (!rentalGroups[feature]) {
                rentalGroups[feature] = [];
              }
              rentalGroups[feature].push(rental);
            });
          });
  
          
          const mostExpensive = Object.entries(rentalGroups).map(([feature, rentals]) => {
            const mostExpensiveRental = rentals.reduce((maxRental, currentRental) => {
              return currentRental.price > maxRental.price ? currentRental : maxRental;
            });
  
            return { feature, rental: mostExpensiveRental };
          });
  
          setMostExpensiveRentals(mostExpensive);
  
        } catch (err) {
          setError('An error occurred. Please try again.');
        }
      };
  
      fetchMostExpensiveRental();
    }, []);
    
    return (
        <div className="most-expensive-rentals">
          <button className="back-button-view" onClick={() => navigate('/view-rentals')}>
            Back to Rentals
          </button>
          <h2>Most Expensive Rentals by Feature</h2>
          {error && <p>{error}</p>}
    
          {mostExpensiveRentals.length === 0 ? (
            <p>No rentals available</p>
          ) : (
            mostExpensiveRentals.map(({ feature, rental }) => (
              <div key={feature} className="rental-feature-group">
                <h3>{feature}</h3>
                <div className="show-rental">
                  <h4>{rental.title}</h4>
                  <p>Description: {rental.description}</p>
                  <p>Features: {rental.features.join(', ')}</p>
                  <p><strong>${rental.price}</strong></p>
                </div>
              </div>
            ))
          )}
        </div>
      );
    }
    
    export default MostExpensiveProperty;