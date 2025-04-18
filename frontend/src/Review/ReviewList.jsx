import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = ({ rentalUnitID }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`/api/reviews/rental/${rentalUnitID}`);
        setReviews(res.data);
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    if (rentalUnitID) {
      fetchReviews();
    }
  }, [rentalUnitID]);

  if (loading) return <p>Loading reviews...</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="review-list">
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <strong>{review.User?.firstName} {review.User?.lastName}</strong> 
            <span> — <em>{review.rating.toUpperCase()}</em></span>
            <p>{review.description}</p>
            <small>{new Date(review.createdAt).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
