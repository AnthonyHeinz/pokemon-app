// Import React
import React from 'react';
// Allows the use of useState and ChangeEvent
import { useState, ChangeEvent } from 'react';
// import Gengerations
import generations from '../data/generations';
// Import Card React Component
import Card from './Card';

const Dashboard = () => {
  const [pokemonSearch, setPokemonSearch] = useState<string>('');
  const [currentPokemon, setCurrentPokemon] = useState<any>(null);
  const [generation, setGeneration] = useState<number>(1);

  const handlePokemonSearchClick = async (): Promise<void> => {
    if (!pokemonSearch.trim()) return;

    try {
      const response = await fetch(
        `http://localhost:3000/api/pokemon/${pokemonSearch}`
      );
      const data = await response.json();
      console.log(data);
      setCurrentPokemon(data);
    } catch (error) {
      console.error('Failed to fetch Pokémon:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPokemonSearch(e.target.value);
  };

  return (
    <div className='flex flex-col items-center gap-4 p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-4xl font-bold text-red-500'>Pokemon Team Builder</h1>
      <div className='flex flex-row items-center gap-4 '>
        <input
          type='text'
          className='border border-gray-300 p-2 rounded'
          placeholder='Enter Pokemon name...'
          onChange={handleInputChange}
          value={pokemonSearch}
        />
        <select
          className='border border-gray-300 p-2 rounded'
          value={generation}
          onChange={(e) => setGeneration(Number(e.target.value))}
        >
          {generations.map((gen) => (
            <option key={gen.value} value={gen.value}>
              {gen.label}
            </option>
          ))}
        </select>
      </div>
      <button
        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
        onClick={handlePokemonSearchClick}
      >
        Search Pokemon
      </button>
      {currentPokemon && <Card pokemon={currentPokemon} />}
    </div>
  );
};

export default Dashboard;
