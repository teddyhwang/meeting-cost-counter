export function timer(value) {
  if (value < 60) {
    return value + ' seconds';
  }

  const minutes = Math.floor(value / 60);
  const seconds = value - (minutes * 60);

  return `${minutes} min ${seconds} sec`;
};
