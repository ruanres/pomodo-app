const formatToTen = (count: number) => {
  return count.toString().padStart(2, '0');
};
export default (counter: number) => {
  const ONE_MINUTE = 60;
  const minutes = Math.floor(counter / ONE_MINUTE);
  const seconds = counter % ONE_MINUTE;
  return `${formatToTen(minutes)}:${formatToTen(seconds)}`;
};
