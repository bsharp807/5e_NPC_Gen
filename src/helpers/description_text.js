const descriptionText = (character) => {
  const description = `${character.first_name} ${character.last_name}, ${character.race} ${character.job}, is ${character.trait} character whose ${character.appearance} the first thing you notice. They are ${character.age} years old, and what they lack in ${character.low_skill} they make up for in ${character.high_skill}. Rumour has it they were born ${character.birthplace}. ${character.first_name} ${character.talent} but also ${character.mannerism}. They value ${character.ideal} above all else, and are ${character.bond}. Their biggest flaw is ${character.flaw}.`
  return description
}

module.exports = descriptionText