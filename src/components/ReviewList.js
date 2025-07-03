// src/components/ReviewList.js
import React, { useEffect, useState } from "react";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(stored);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedReviews = reviews.filter((_, index) => index !== indexToDelete);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  return (
    <div className="review-list">
      <h2>📋 All Movie Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews submitted yet.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="review-card">
              <strong>{review.name}</strong> reviewed <em>{review.movie}</em>
              <br />⭐ Rating: {review.rating}/5
              <br />
              {review.comments && <p>📝 {review.comments}</p>}
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                🗑️ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
