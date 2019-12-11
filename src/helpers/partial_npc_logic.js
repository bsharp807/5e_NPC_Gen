const RandomGeneration = require('./random_generation.js');

const formRandomElements = (attributes = {}) => {
  const randomGeneration = new RandomGeneration(attributes)
  const randomElements = {
    high_skill: randomGeneration.randomSkill(),
    low_skill: randomGeneration.randomSkill(),
    trait: randomGeneration.randomTrait(),
    appearance: randomGeneration.randomAppearance(),
    talent: randomGeneration.randomTalent(),
    mannerism: randomGeneration.randomMannerism(),
    ideal: randomGeneration.randomIdeal(),
    bond: randomGeneration.randomBond(),
    flaw: randomGeneration.randomFlaw(),
    birthplace: randomGeneration.randomBirthplace(),
  }
  return randomElements
}

module.exports = formRandomElements