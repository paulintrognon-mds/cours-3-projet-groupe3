import hoursToTimeOfDay from './hoursToTimeOfDay';

describe('services/timeOfDay/hoursToTimeOfDay', () => {
  it('should return "day" for hours=12', () => {
    expect(hoursToTimeOfDay(9)).toEqual('day');
    expect(hoursToTimeOfDay(10)).toEqual('day');
    expect(hoursToTimeOfDay(11)).toEqual('day');
    expect(hoursToTimeOfDay(12)).toEqual('day');
    expect(hoursToTimeOfDay(13)).toEqual('day');
    expect(hoursToTimeOfDay(14)).toEqual('day');
    expect(hoursToTimeOfDay(15)).toEqual('day');
    expect(hoursToTimeOfDay(16)).toEqual('day');
    expect(hoursToTimeOfDay(17)).toEqual('day');
    expect(hoursToTimeOfDay(18)).toEqual('day');
  });
});
