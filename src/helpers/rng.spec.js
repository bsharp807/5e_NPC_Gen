const RNG = require('./rng.js');

describe('rng test', () => {
  let array;
  let rng;

  beforeEach(() => {
    array = ['test case one', 'test case two'];
    rng = new RNG();
  })

  test('random number generator returns a number', () => {
    expect(rng.rand(array)).toBeGreaterThan(-1);
  })

  test('random number genrator returns an element', () => {
    let newArray = ['test one'];
    expect(rng.randArray(newArray)).toBe('test one');
  })

  test('random number generator returns a number with a minimum value', () => {
    expect(rng.randNum(100, 15)).toBeGreaterThan(15);
  })

})
