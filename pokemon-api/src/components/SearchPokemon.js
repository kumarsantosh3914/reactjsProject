import React, { useState } from 'react';
import axios from 'axios';

function SearchPokemon() {
    const [query, setQuery] = useState('');
    const [pokemon, setPokemon] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
        setPokemon(response.data);
        setQuery('');
    };

    return (
        <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center mb-8">
                <label htmlFor="search" className="mr-2 mb-2 md:mb-0 text-gray-700 font-bold">Search for a Pokemon by name or ID:</label>
                <div className="flex flex-col md:flex-row">
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} id="search" className="px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Pikachu, 25" />
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Search</button>
                </div>
            </form>

            {pokemon && (
                <div className="border border-gray-200 p-4 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} className="mx-auto mb-4 w-48 h-48" />
                    <p className="mb-2"><span className="font-bold">Height:</span> {pokemon.height} m</p>
                    <p className="mb-2"><span className="font-bold">Weight:</span> {pokemon.weight} kg</p>
                </div>
            )}
        </div>
    );
}

export default SearchPokemon;
