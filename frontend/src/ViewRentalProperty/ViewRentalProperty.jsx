import React, { useEffect, useState } from 'react';
import './ViewRentalProperty.css';
import { useNavigate } from 'react-router-dom';

function ViewRentalProperty() {
  const [rentals, setRentals] = useState([]);
  const [selectedRental, setSelectedRental] = useState(null); // NEW
  const [reviews, setReviews] = useState([]); // NEW
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/rentals');
        const data = await response.json();

        if (!response.ok) {
          setError(data.error || 'Cannot see rentals');
          return;
        }

        setRentals(data);
      } catch (err) {
        setError('An error occurred. Please try again.');
      }
    };

    fetchRentals();
  }, []);

  const handleSelectRental = async (rental) => {
    setSelectedRental(rental);
    try {
      const response = await fetch(`http://localhost:4000/api/reviews/rental/${rental.id}`);
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
    }
  };

  return (
    <div className="rental-list">
      {selectedRental ? (
        <div className="selected-rental">
          <h2>{selectedRental.title}</h2>
          <p>Description: {selectedRental.description}</p>
          <p>Features: {selectedRental.features.join(', ')}</p>
          <p><strong>${selectedRental.price}</strong></p>

          <h4>Reviews:</h4>
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            <ul className="review-list">
              {reviews.map((review) => (
                <li key={review.id}>
                  <strong>{review.User?.firstName} {review.User?.lastName}</strong> — <em>{review.rating}</em>
                  <p>{review.description}</p>
                  <small>{new Date(review.createdAt).toLocaleDateString()}</small>
                </li>
              ))}
            </ul>
          )}

          <button onClick={() => setSelectedRental(null)} className="back-button-view">
            Back to Rentals
          </button>
        </div>
      ) : (
        rentals.map((rental) => (
          <div key={rental.id} className="rental-show" onClick={() => handleSelectRental(rental)}>
            <h3>{rental.title}</h3>
            <p>Description: {rental.description}</p>
            <p>Features: {rental.features.join(', ')}</p>
            <p><strong>${rental.price}</strong></p>
          </div>
        ))
      )}

      {!selectedRental && (
        <button onClick={() => navigate('/menu')} className="back-button-view">
          Back to Menu
        </button>
      )}
    </div>
  );
}

export default ViewRentalProperty;
