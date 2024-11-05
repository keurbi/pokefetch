import React, { FC } from 'react';
import './PokemonNotEntered.css';

interface PokemonNotEnteredProps {
}

const dataNotEntered = {
  title : "No Pokemon Yet!",
  url : "Please submit a pokemon!",
  ability : "-",
  type : "-",
  damage : "-"
}

const PokemonNotEntered: FC<PokemonNotEnteredProps> = () => (
  <div className="PokemonNotEntered">
    <h2>{dataNotEntered.title}</h2>
    <span>{dataNotEntered.url}</span>
    <div>
      <span>{dataNotEntered.ability}</span>
      <span>{dataNotEntered.type}</span>
      <span>{dataNotEntered.damage}</span>
    </div>
  </div>
);

export default PokemonNotEntered;
