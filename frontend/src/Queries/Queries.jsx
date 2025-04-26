import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Queries.css'
import { use } from 'react';

function Queries() {
  const [positiveUnits, setPositiveUnits] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const[searchUsername, setSearchUsername] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [hasSearchedTopUsers, setHasSearchedTopUsers] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();



  const fetchPositiveUnits = async (username) => {
    try {
      const response = await fetch(`http://localhost:4000/api/query/positive-reviews?username=${username}`);
      const data = await response.json();
      setPositiveUnits(data);
    } catch (err) {
      console.error('Error fetching positive units:', err);
    }
  };

  const fetchTopPosters = async (date) => {
    try {
      const response = await fetch(`http://localhost:4000/api/query/top-posters/${selectedDate}`);
      const data = await response.json();
      setTopUsers(data);
      setHasSearchedTopUsers(true);
    } catch (err) {
      console.error('Error fetching top posters:', err);
    }
  };

  return(
    <div>
      <button onClick = {() => navigate('/menu')} className="return-button">Return to Menu</button>
      <div className='queries-box'>

        <div className='query-header'>
          <h2>Query Selection</h2>
        </div> 

        <div className='positive-reviews'>
          <h3>Search for Positive Reviewed Units by Owner</h3>
          <input
            type="text"
            placeholder="Enter Username"
            value={searchUsername}
            onChange={(e) => setSearchUsername(e.target.value)}
            className="username-input"
          />
          <button className='selection' onClick={() => {
            fetchPositiveUnits(searchUsername);
            setHasSearched(true);
            }}>Go
          </button>

          <div className="positive-units-list">
            {hasSearched ? (
              positiveUnits.length > 0 ? (
                <ul>
                  {positiveUnits.map((unit, index) => (
                    <li key={index}>{unit.title || "Untitled Unit"}</li>
                  ))}
                </ul>
              ) : (
                <p>No results found.</p>
              )
            ) : null}
          </div>

        </div>

        <div className='top-users'>
          <h3> Search for user who has posted the most rental units by date</h3>
          <input
          type="date"
          className='selection'
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button className='selection' onClick={() => fetchTopPosters(selectedDate)}>Go</button>

          <div className='top-users-list'>
            
            {hasSearchedTopUsers ? (
              topUsers.length > 0 ? (
                <ul>
                  {topUsers.map((user, index) => (
                    <li key={index}>
                      {user.username || "No user found"}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No users found for selected date</p>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Queries;
