import React, { useState, useEffect } from 'react';

function LiveSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (query) {
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=5a2f99915271afb74d1fbff41026eb4c&query=${query}`)
                    .then(res => res.json())
                    .then(data => setResults(data.results))
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
