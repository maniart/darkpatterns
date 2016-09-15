/*
  Dimensions in this experiment are derived from the actual
  dimensions of the bedroom, scaled down by factor of 5.
  so, if width of a wall is equal to 155, in code it will be 3
  for this purpose, we'll use the handy function called #scale
  which is created using the higher order fn `#createScaleFn`
*/
const createScaleFn = () => {
  const k = 5;
  return (input) => input / k;
};

export const scale = createScaleFn();
