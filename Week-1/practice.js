//Solution - 1
// function PlusMinus(arr) {
//   //Write code here
//   let [pos, neg, zer] = [0, 0, 0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 1) pos++;
//     else if (arr[i] < 0) neg++;
//     else if (arr[i] === 0) zer++;
//   }
//   let ratio = [pos, neg, zer];
//   ratio.forEach((val) => {
//     console.log((val / arr.length).toFixed(6));
//   });
// }

// PlusMinus([3, -2, -1, 0, -3, 2]);

//Solution -2

// function plusMinus(arr) {
//   let minus = 0;
//   let plus = 0;
//   let zero = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       minus++;
//     }
//     if (arr[i] > 0) {
//       plus++;
//     }
//     if (arr[i] == 0) {
//       zero++;
//     }
//   }

//   const plusratio = plus / arr.length;
//   const minusratio = minus / arr.length;
//   const zeroration = zero / arr.length;

//   console.log(plusratio.toFixed(6));
//   console.log(minusratio.toFixed(6));
//   console.log(zeroration.toFixed(6));
// }
// plusMinus([3, -2, -1, 0, -3, 2]);

//Task-2
// const arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
