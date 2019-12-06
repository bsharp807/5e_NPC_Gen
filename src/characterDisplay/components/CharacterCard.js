import React from 'react';
import CardName from './CardName';
import CardAge from './CardAge';
import CardRace from './CardRace';
import CardJob from './CardJob';

const CharacterCard = (props) => {
  console.log(props.character);
    return(
      <div>
        <CardName firstName= {props.character.first_name} lastName= {props.character.last_name}/>
        <CardRace race={props.character.race} />
        <CardJob job= {props.character.job} />
        <CardAge age= {props.character.age} />
      </div>
    )
}

export default CharacterCard;
