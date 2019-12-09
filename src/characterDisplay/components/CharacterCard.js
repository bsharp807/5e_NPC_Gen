import React from 'react';
import CardName from './CardName';
import CardAge from './CardAge';
import CardRace from './CardRace';
import CardJob from './CardJob';
import CardDescription from './CardDescription';

const CharacterCard = (props) => {
  if (props.character.first_name) {
    return(
      <div>
        <CardName firstName= {props.character.first_name} lastName= {props.character.last_name}/>
        <CardRace race={props.character.race} />
        <CardJob job= {props.character.job} />
        <CardAge age= {props.character.age} />
        <CardDescription />
      </div>
    )
  } else return <div>Loading...</div>
}

export default CharacterCard;
