import React from 'react';
import CardName from './CardName';
import CardAge from './CardAge';
import CardRace from './CardRace';
import CardJob from './CardJob';
import ViewCharacter from './ViewCharacter';

const CharacterCard = (props) => {
  return(
    <div id="all-character-card">
      <CardName firstName= {props.character.first_name} lastName= {props.character.last_name}/>
      <CardRace race={props.character.race} />
      <CardJob job= {props.character.job} />
      <CardAge age= {props.character.age} />
      <ViewCharacter viewChar= {props.viewChar} index= {props.character.id}/>
    </div>
  )
}

export default CharacterCard;
