import React, { FC } from 'react';
import './PokemonLoading.css';

interface PokemonLoadingProps {
  title: string
}

const dataLoading = {
  url : "Loading",
  ability : "...",
  type : "...",
  damage : "..."
}

const PokemonLoading: FC<PokemonLoadingProps> = (data) => (
  <div className="PokemonLoading">
    <h2>{data.title}</h2>
    <span>{dataLoading.url + data.title}</span>
    <div>
      <span>{dataLoading.ability}</span>
      <span>{dataLoading.type}</span>
      <span>{dataLoading.damage}</span>
    </div>
  </div>
);

export default PokemonLoading;
