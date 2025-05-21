// Import React
import React from 'react';

import { useState } from 'react';

type PokemonProps = {
  pokemon: {
    name: string;
    height: number;
    weight: number;
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];

    sprites: {
      front_default: string;
    };
  };
};

const Card: React.FC<PokemonProps> = ({ pokemon }) => {
  const [selectedAbility, setSelectedAbility] = useState('');

  const handleAbilityChange = (e) => {
    setSelectedAbility(e.target.value);
    return;
  };

  return (
    <div className='border border-gray-400 p-4 rounded shadow-md bg-white w-64'>
      <h2 className='text-xl font-bold capitalize'>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className='w-32 h-32 mx-auto my-2'
      />
      <select value={selectedAbility} onChange={handleAbilityChange}>
        {pokemon.abilities.map((abilitySet) => (
          <option key={abilitySet.ability.name} value={abilitySet.ability.name}>
            {abilitySet.ability.name}
          </option>
        ))}
      </select>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};

export default Card;
