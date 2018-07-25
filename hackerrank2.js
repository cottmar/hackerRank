function simpleArraySum(ar) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return(ar.reduce(reducer));
}
