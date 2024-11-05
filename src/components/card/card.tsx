import React, { FC, useState, useEffect } from 'react';
import './Card.css';
import Form from '../Form/Form';
import Stats from '../Stats/Stats';
import Input from '../Input/Input';

interface cardProps {}

/* const PokemonSuggestion =({name, buttonSubmit}) => {
  return <button onClick={()=>buttonSubmit(name)}>{name}</button>
}

const tryDitto = <PokemonSuggestion {...{name: "Ditto", buttonSubmit}}/>
const tryVulpix = <PokemonSuggestion {...{name: "Vulpix", buttonSubmit}}/>
const tryEctoplasma = <PokemonSuggestion {...{name: "Ectoplasma", buttonSubmit}}/> 

      <span>Ideas of pokemons : {tryDitto}, {tryEctoplasma}, {tryVulpix}  </span>
*/

const Card: FC<cardProps> = () => {

  const [pokeFetched, setPokeFetched] = useState<number>(0);
  const [pokedata, setPokedata] = useState<{
    title: string,
    cardTitle: string,
    ability: string,
    type: string,
    damage: number,
    url: string
  }>({
    title: "No pokemon yet !",
    cardTitle: "Please submit a pokemon !",
    ability: "-",
    type: "-",
    damage: 0,
    url: ""
  });

  const handleSearch = async (pokemonName: string) => {
    try {
      const URL_BASE = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
      const response = await fetch(URL_BASE);
      const data = await response.json();
      
      setPokedata({
        title: data.name,
        cardTitle: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        ability: data.abilities[0].ability.name,
        type: data.types[0].type.name,
        damage: data.stats[1].base_stat,
        url: data.sprites.front_default
      });
      setPokeFetched(prev => prev + 1);
    } catch (error) {
      console.error('Pokemon not found');
    }
  };

  return (
    <div className="card">
      <Form onSearch={handleSearch} />
      {pokedata.url && <img src={pokedata.url} alt={pokedata.title} />}
      <span>{pokedata.ability}</span>
      <Stats data={pokedata} status={pokeFetched}/>
    </div>
  );
};
export default Card;
