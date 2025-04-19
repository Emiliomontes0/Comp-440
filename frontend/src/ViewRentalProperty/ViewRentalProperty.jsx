import React, { useEffect, useState } from 'react';
import './ViewRentalProperty.css';
import { useNavigate } from 'react-router-dom';

function ViewRentalProperty() {
  const [rentals, setRentals] = useState([]);
  const [selectedRental, setSelectedRental] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [reviewError, setReviewError] = useState('');

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
    setShowReviewForm(false);
    try {
      const response = await fetch(`http://localhost:4000/api/reviews/rental/${rental.id}`);
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
    }
  };

  const handleSubmitReview = async () => {
    setReviewError('');
    try {
      const response = await fetch('http://localhost:4000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // adjust if needed
        },
        body: JSON.stringify({
          rentalUnitID: selectedRental.id,
          rating,
          description
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setReviewError(data.message || 'Failed to submit review');
        return;
      }

      // Add new review to the top
      setReviews(prev => [data, ...prev]);
      setRating('');
      setDescription('');
      setShowReviewForm(false);
    } catch (err) {
      setReviewError('Something went wrong.');
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
          <p> Owned by: {selectedRental.owner.firstName} {selectedRental.owner.lastName}</p>

          <h4>Reviews:</h4>

          <button onClick={() => setShowReviewForm(prev => !prev)} className="add-review-button">
            {showReviewForm ? 'Cancel' : 'Add Review'}
          </button>

          {showReviewForm && (
            <div className="review-form">
              <label>
                Rating:
                <select value={rating} onChange={e => setRating(e.target.value)} required>
                  <option value="">Select a rating</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </label>

              <label>
                Description:
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rows={3}
                  placeholder="Write your review here..."
                />
              </label>

              {reviewError && <p style={{ color: 'red' }}>{reviewError}</p>}

              <button onClick={handleSubmitReview}>Submit Review</button>
            </div>
          )}

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
