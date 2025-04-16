import React, { useState } from 'react';
import './ListRentalProperty.css'

function ListRentalProperty() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [features, setFeatures] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('You must be logged in to view this page');
                return;
            }

            const response = await fetch('http://localhost:4000/api/rentals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title,
                    description,
                    features: features.split(',').map(f => f.trim()),
                    price,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Something went wrong here');
            }
            setSuccess('Rental Listed');
            setTitle('');
            setDescription('');
            setFeatures('');
            setPrice('');
        } catch (err) {
            setError(err.message);
        }
    };


    
    return (
        <div className="list-form-container">
            <h2>List Rental Property</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="features"
                    placeholder="Features"
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
}

export default ListRentalProperty;
