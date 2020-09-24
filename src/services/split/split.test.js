import split from './split';

describe('services/split/split', () => {
  it('should split a string every x characters', () => {
    expect(split('1589647328', 3)).toEqual(['1', '589', '647', '328']);
    expect(split('4963813675', 2)).toEqual(['49', '63', '81', '36', '75']);
    expect(split('792463079965448031', 4)).toEqual(['79', '2463', '0799', '6544', '8031']);
  });
  it('if the text is longer than the defined lenght, should return the complete text', () => {
    expect(split('1587', 5)).toEqual(['1587']);
    expect(split('57639561', 10)).toEqual(['57639561']);
  });
});
