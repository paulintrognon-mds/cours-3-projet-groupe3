import toBinary from './toBinary';

describe('services/toBinary/toBinary', () => {
  it('should return binary', () => {
    expect(toBinary(15)).toEqual('1111');
  });
});
