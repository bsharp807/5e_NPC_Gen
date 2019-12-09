const RandomGeneration = require('./random_generation.js');

const randomNonPlayerCharacterGenerator = (attributes = {}) => {
  const randomGeneration = new RandomGeneration(attributes)
  const characterRace = randomGeneration.randomRace()
  const characterGender = randomGeneration.randomGender()
  const randomCharacter = {
    first_name:randomGeneration.genderedRaceNameFilter(characterRace, characterGender),
    job: randomGeneration.randomJob(),
    age: randomGeneration.randomAge(),
    high_skill: randomGeneration.randomSkill(),
    low_skill: randomGeneration.randomSkill(),
    last_name: randomGeneration.filteredLastName(characterRace),
    race: characterRace,
    trait: randomGeneration.randomTrait(),
    appearance: randomGeneration.randomAppearance(),
    talent: randomGeneration.randomTalent(),
    mannerism: randomGeneration.randomMannerism(),
    ideal: randomGeneration.randomIdeal(),
    bond: randomGeneration.randomBond(),
    flaw: randomGeneration.randomFlaw(),
    birthplace: randomGeneration.randomBirthplace(),
    gender: characterGender
  }
  return randomCharacter
}

module.exports = randomNonPlayerCharacterGenerator