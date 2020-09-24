import split from './split';

describe('services/split/split', () => {
  it('should split a string every x characters', () => {
    expect(split('1589647328', 3)).toEqual(['1', '589', '647', '328']);
    expect(split('4963813675', 2)).toEqual(['49', '63', '81', '36', '75']);
    expect(split('792463079965448031', 4)).toEqual(['79', '2463', '0799', '6544', '8031']);
  });
});
