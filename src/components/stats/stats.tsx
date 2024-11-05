import React, { FC } from 'react';
import './stats.css';
import PokemonNotEntered from '../PokemonNotEntered/PokemonNotEntered';
import PokemonView from '../PokemonView/PokemonView';
import PokemonLoading from '../PokemonLoading/PokemonLoading';

interface statsProps {
  data:{
    title : string,
    damage : number,
    ability : string,
    type : string,
    url : string
  },
  status : number
}

const stats: FC<statsProps> = ({ data, status }) => {
  if (status === 0) {
    return <PokemonNotEntered/>;
  }
  if (status === 1){
    return <PokemonLoading title={data.title}/>
  }
  if (status === 2){
    return <PokemonView data={data} />
  }
};

export default stats;
