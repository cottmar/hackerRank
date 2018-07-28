// the reduce method applies a function against an accumulator and each element in the array to reduce it to a single value. 

function simpleArraySum(ar) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return(ar.reduce(reducer));
}

function checkExam(array1, array2) {
  var score = 0;
  for(var i = 0; i < array1.length; i++){
  if (array1[i] === array2[i]){
  score += 4;
  } else if (array2[i] === "") {
  score += 0;
  } else if (array1[i] !== array2[i]) {
  score = score - 1;
  }
  }
  if (score < 0) {
  score = 0;
  }
  return score;
  }