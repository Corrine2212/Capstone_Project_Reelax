import React, { useState, useEffect } from 'react';
import Request from '../helpers/request';

function LiveSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (query) {
                const request = new Request()
                request.get(`api/movies/${query}`)
                    // .then(res => res.json())
                    .then(data => setResults(data))
                    .catch(err => console.error(err));
            }
        }, 500) // delay in ms

        return () => clearTimeout(delayDebounceFn)
    }, [query])

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a movie..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <div>
                {results.map(movie => (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LiveSearch;
