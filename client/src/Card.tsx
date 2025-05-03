// Import React
import React from 'react';

type PokemonProps = {
  pokemon: {
    name: string;
    height: number;
    weight: number;
    sprites: {
      front_default: string;
    };
  };
};

const Card: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div className='border border-gray-400 p-4 rounded shadow-md bg-white w-64'>
      <h2 className='text-xl font-bold capitalize'>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className='w-32 h-32 mx-auto my-2'
      />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};

export default Card;
