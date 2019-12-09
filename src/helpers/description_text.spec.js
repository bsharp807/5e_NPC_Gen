const descriptionText = require('./description_text.js')

describe('test suite for description text', () => {
  let character = {
    age: 25,
    appearance: "distinctive tattoo is",
    birthplace: "in the mountains",
    bond: "loyal to their benefactor",
    first_name: "Laherl",
    flaw: "an overpowering greed",
    gender: "female",
    high_skill: "Constitution",
    ideal: "Logic",
    job: "Cleric",
    last_name: "Davies",
    low_skill: "Intelligence",
    mannerism: "slurs their words",
    race: "Human",
    talent: "drinks everyone under the table",
    trait: "a friendly"
  }

  test('it should return a certain string when given certain inputs', () => {
    expect(descriptionText(character)).toBe('Laherl Davies, Human Cleric, is a friendly character whose distinctive tattoo is the first thing you notice. They are 25 years old, and what they lack in Intelligence they make up for in Constitution. Rumour has it they were born in the mountains. Laherl drinks everyone under the table but also slurs their words. They value Logic above all else, and are loyal to their benefactor. Their biggest flaw is an overpowering greed.')
  })
})