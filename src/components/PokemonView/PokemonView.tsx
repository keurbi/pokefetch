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
    <div className='statsdiv'>
      <div>      
        <h4>Ability</h4>
        <span>{data.data.ability}</span>
      </div>
      <div>
        <h4>Type</h4>
        <span>{data.data.type}</span>
        </div>
      <div>
         <h4>Damage</h4>
        <span>{data.data.damage}</span>
        </div>
    </div>
  </div>
);

export default PokemonView;
