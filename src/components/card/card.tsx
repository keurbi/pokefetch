import React, { FC,useState } from 'react';
import './card.css';

interface cardProps {}

const [pokeFetched, setPokeFetched] = useState<number>(0);
const [pokedata, setPokedata] = useState<{title : string, cardTitle : string, ability : string, type : string, damage : number}>({title : "No pokemon yet !", cardTitle : "Please submit a pokemon !", ability : "-", type:"-", damage:0 });



const card: FC<cardProps> = () => (
  <div className="card">
    <h2></h2>
  </div>
);

export default card;
