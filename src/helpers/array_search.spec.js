const arraySearch = require('./array_search.js')

describe('test suite for array search', () => {
  let element;
  let gorge = {id: 1, firstName: 'gorge'}
  let array = [];
  let noGorge = []
  let arrayWithGorge = [{id: 1, firstName: 'gorge'}, {id: 2, firstName: 'heslop'}]

  test('it should throw an error if empty data input', () => {
    expect(arraySearch.search(element, array)).toBe('error message')
  })

  test('it should return an error if it can`t find the element', () => {
    expect(arraySearch.search(gorge, noGorge)).toBe('element not found')
  })

  test('it should return the element if it gets a match', () => {
    expect(arraySearch.search(gorge, arrayWithGorge).firstName).toBe('gorge')
  })
})