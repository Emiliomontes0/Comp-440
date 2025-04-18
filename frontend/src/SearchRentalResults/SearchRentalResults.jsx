import React, {useEffect, useState} from "react";
import {useLocation, useSearchParams} from 'react-router-dom';
import './SearchRentalResults.css';


function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function SearchRentalResults(){
    const [searchParams] = useSearchParams();
    const feature = searchParams.get('feature');
    const [results, setResults] = useState([]);
    const [error, setError]= useState('');

    useEffect(() => {
        const fetchResults = async () => {
            try{
                const response = await fetch(`http://localhost:4000/api/search?feature=${encodeURIComponent(feature)}`);
                const data = await response.json();
                if (!response.ok){
                    setError(data.error || 'Cannot see search Results')
                    return;
                }

                setResults(data);
            } catch(err){
                setError('Failed to fetch search');
            }
        };

        if (feature){
            fetchResults();
        }
    }, [feature]);

    return (
        <div className= "rental-list">
            <h2 className ="search-results-heading">Search Results for "{feature}"</h2>

            {error && <p className = "error-message">{error}</p>}

            <div className = "rental-results-container">
            {results.map(rental=> (
                <div key = {rental.id} className ="rental-show">
                <h3>{rental.title}</h3>
                <p>Description: {rental.description}</p>
                <p>Features: {rental.features.join(', ')}</p>
                <p><strong>$ {rental.price}</strong></p>
                
            </div>
            ))}
        </div>
    </div>

    );
}

export default SearchRentalResults;
