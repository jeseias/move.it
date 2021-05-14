export const formatTime = (time: number) => {
  const [minuteLeft, minuteRight] = String(time).padStart(2, '0').split('');

  return [minuteLeft, minuteRight];
};
