import React, { useEffect, useState } from 'react';

const Sample = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);
        setError(null);
        try {
            let response = await fetch(`https://dummyjson.com/products/search?q=${input}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let finalData = await response.json();
            setData(finalData.products);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (input) {
            fetchData();
        } else {
            setData([]);
        }
    }, [input,fetchData]);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>FETCH DATA</h1>=
            <input
                type="text"
                placeholder='Search products'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
            />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                {data.map((el) => {
                    const { id, title, description, price, rating, thumbnail } = el;
                    return (
                        <div key={id} style={{ marginBottom: '20px', textAlign: 'left' }}>
                            <img
                                src={thumbnail}
                                alt={title}
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                            <p><strong>{title}</strong></p>
                            <p>{description}</p>
                            <p>Rating: {rating}</p>
                            <p>Rs: {price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sample;