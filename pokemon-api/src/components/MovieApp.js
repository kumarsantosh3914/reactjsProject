import React, { useState } from 'react';
import axios from 'axios';

function MovieApp() {
    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://www.omdbapi.com/?apikey=3f93ffc9&t=${query}`);
        setMovie(response.data);
        setQuery('');
    };

    return (
        <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center mb-8">
                <label htmlFor="search" className="mr-2 mb-2 md:mb-0">Search for a movie:</label>
                <div className="flex flex-col md:flex-row">
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} id="search" className="px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Search</button>
                </div>
            </form>

            {movie && (
                <div className="border border-gray-200 p-4 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
                    <img src={movie.Poster} alt={`${movie.Title} Poster`} className="mx-auto mb-4" />
                    <p className="mb-2">Release Year: {movie.Year}</p>
                    <p className="mb-2">Runtime: {movie.Runtime}</p>
                    <p>{movie.Plot}</p>
                </div>
            )}
        </div>
    );
}

export default MovieApp;
