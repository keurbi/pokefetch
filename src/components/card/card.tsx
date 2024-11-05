import React, { FC,useState } from 'react';
import './card.css';
import Form from '../Form/Form';
import Stats from '../Stats/Stats';
import Input from '../Input/Input';

interface cardProps {}

const [pokeFetched, setPokeFetched] = useState<number>(0);
const [pokedata, setPokedata] = useState<{title : string, cardTitle : string, ability : string, type : string, damage : number, url : string}>({title : "No pokemon yet !", cardTitle : "Please submit a pokemon !", ability : "-", type:"-", damage:0, url:"" });



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
