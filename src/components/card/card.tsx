import React, { FC, useState, useEffect } from 'react';
import './card.css';
import Form from '../Form/Form';
import Stats from '../Stats/Stats';
import Input from '../Input/Input';

interface cardProps {}

const [pokeFetched, setPokeFetched] = useState<number>(0);
const [pokedata, setPokedata] = useState<{title : string, cardTitle : string, ability : string, type : string, damage : number, url : string}>({title : "No pokemon yet !", cardTitle : "Please submit a pokemon !", ability : "-", type:"-", damage:0, url:"" });

const FetchPokeAPI = () => {
  const URL_BASE = "https://pokeapi.co/api/v2/pokemon/charmander"
  const [pokemon, setPokemon] =useState([]);

  useEffect(()=>{
    const fetchWithAsyncAwait = async() => {
      const response = await fetch(URL_BASE);
      const data = await response.json();
      setPokedata(data);

      fetchWithAsyncAwait();
      console.log(pokedata);
    }}
  ,[])
}

/* const PokemonSuggestion =({name, buttonSubmit}) => {
  return <button onClick={()=>buttonSubmit(name)}>{name}</button>
}

const tryDitto = <PokemonSuggestion {...{name: "Ditto", buttonSubmit}}/>
const tryVulpix = <PokemonSuggestion {...{name: "Vulpix", buttonSubmit}}/>
const tryEctoplasma = <PokemonSuggestion {...{name: "Ectoplasma", buttonSubmit}}/> 

      <span>Ideas of pokemons : {tryDitto}, {tryEctoplasma}, {tryVulpix}  </span>
*/

const Card: FC<cardProps> = () => {
  return (
    <div className="card">
      <Form>
        <Input />
      </Form>

      <Stats data={pokedata} status={pokeFetched}/>
    </div>
  );
};

export default Card;
