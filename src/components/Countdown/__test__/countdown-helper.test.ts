import { formatTime } from '../countdown-helper';

describe(`${formatTime} helper function`, () => {
  it('should format minutes as expected', () => {
    expect(formatTime(11)).toEqual(['1', '1']);
  });

  it('should format seconds as expected', () => {
    expect(formatTime(50)).toEqual(['5', '0']);
  });
});
