//In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer

// function squareDigits(num) {
//   return parseInt(
//     num
//       .toString()
//       .split("")
//       .map((x) => x * x)
//       .join("")
//   );
// }
// console.log(squareDigits(3212));


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
  let output = [];
  numbers = numbers.split(" ").sort((a,b)=>b-a);
  output.push(numbers[0]);
  output.push(numbers[numbers.length-1]);
 return  output.join(" ").toString();
  
}

console.log(highAndLow("1 2 -3 4 5")); 