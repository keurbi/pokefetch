import React, { FC, useState, useEffect } from 'react';
import './Card.css';
import Form from '../Form/Form';
import Stats from '../Stats/Stats';
import Input from '../Input/Input';

interface cardProps {}

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
    setPokeFetched(1); // loading
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

      setTimeout(() => {
        setPokeFetched(2);
      }, 1000); //fetch réussi

    } catch (error) {
      setPokeFetched(0); // fetch raté/error
    }
  };

  return (
    <div className="card">
      <Form onSearch={handleSearch} />
      <Stats data={pokedata} status={pokeFetched}/>
    </div>
  );
};
export default Card;
