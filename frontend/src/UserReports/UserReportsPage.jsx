import React, { useEffect, useState } from 'react';
import './UserReportsPage.css';
import { useNavigate } from 'react-router-dom';

const UserReportsPage = () => {
  const [poorReviewers, setPoorReviewers] = useState([]);
  const [cleanLandlords, setCleanLandlords] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const [resPoor, resClean] = await Promise.all([
          fetch('http://localhost:4000/api/users/only-poor-reviewers'),
          fetch('http://localhost:4000/api/users/clean-landlords')
        ]);

        const poorData = await resPoor.json();
        const cleanData = await resClean.json();

        setPoorReviewers(poorData);
        setCleanLandlords(cleanData);
      } catch (err) {
        console.error('Error fetching reports:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="user-reports-container">
      <button onClick = {() => navigate('/menu')} className="return-button">Return to Menu</button>
      <h1>User Reports</h1>

      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <>
          <section className="report-section">
            <h2>Users Who Only Posted "Poor" Reviews</h2>
            {poorReviewers.length === 0 ? (
              <p>No users found.</p>
            ) : (
              <ul className="report-list">
                {poorReviewers.map((user) => (
                  <li key={user.id}>
                    <strong>{user.name}</strong> ({user.username})
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="report-section">
            <h2>Clean Landlords (No "Poor" Reviews on Their Units)</h2>
            {cleanLandlords.length === 0 ? (
              <p>No users found.</p>
            ) : (
              <ul className="report-list">
                {cleanLandlords.map((user) => (
                  <li key={user.id}>
                    <strong>{user.name}</strong> ({user.username})
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default UserReportsPage;
