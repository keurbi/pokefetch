import React, { FC } from 'react';
import './PokemonView.css';

interface PokemonViewProps {
  data : {
    title : string,
    damage : number,
    ability : string,
    type : string,
    url : string
  }
}

const PokemonView: FC<PokemonViewProps> = (data) => (
  <div className="PokemonView">
    <h2>{data.data.title}</h2>
    <img src={data.data.url} alt={data.data.title}/>
    <div>
      <span>{data.data.ability}</span>
      <span>{data.data.type}</span>
      <span>{data.data.damage}</span>
    </div>
  </div>
);

export default PokemonView;
