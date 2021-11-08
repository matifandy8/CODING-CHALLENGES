// convertir string a array https://dev.to/soyleninjs/6-formas-de-convertir-un-string-en-array-con-javascript-320n

// n = [
//   9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
//   71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84,
//   94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46,
//   19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58,
//   55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99,
//   16,
// ];

// function missingNo(nums) {
//   let shortarr = nums.sort((a, b) => a - b);
//   for (let i = 0; i <= 100; i++) {
//       const element = i;
//       if (element !== shortarr[i]) {
//           return element
//       }
//   }
// }

// missingNo = (n) => {
//   for (i = 0; i <= 100; i++) {
//     if (!n.includes(i)) {
//       return i;
//     }
//   }
// };

// function missingNo(nums) {
//   return 5050 - nums.reduce((a, b) => a + b, 0);
// }
// The sum of numbers from 0 to 100. There is a formula for the sum of numbers from 1 to n(inclusive) that is n*(n+1)/2 so if you apply you 100101/2=50101=5050 without a calculator you can get the sum.

// console.log(missingNo(n))

//  const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// console.log(isSquare(25))
// console.log(isSquare(90));
// console.log(isSquare(4));

// var number = function (busStops) {
//   let peopleBus = 0;
//   // iterating over the busStops
//   for (let i = 0; i < busStops.length; i++) {
//     // get the length of the inner array elements
//     let innerArrayLength = busStops[i].length;
//     // looping inner array elements
//     bus = busStops[i];
//     sube = bus[0];
//     baja = bus[1];
//     peopleBus += sube;
//     peopleBus -= baja;
//     console.log(peopleBus);
//   }
//     return peopleBus;
// };

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );
// console.log(number([[3, 0],[9, 1],[4, 10],[12, 2],[6, 1],[7, 10]]));
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8],
//   ]));
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//   ])
// );


// function narcissistic(value) {
//   // Code me to return true or false
//  valueArr = value.toString().split();
//  console.log(valueArr)
//  valuelength = value.length
// let sum = 0;
// for (let i = 0; i < valuelength; i++) {
//   sum += valueArr[i] * valuelength;
// }
// return sum
// }

// console.log(narcissistic(371));
// console.log(narcissistic(153));
// console.log(narcissistic(1652));
// console.log(narcissistic(7));

// function areEquallyStrong(a,b,c,d) {
//     if (a == b && c == d) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(areEquallyStrong(10,15,15,10))

// console.log(areEquallyStrong(15,10,15,10))

// console.log(areEquallyStrong(10,10,10,10))

// console.log(areEquallyStrong(15,10,15,9))

// console.log(areEquallyStrong(10,5,5,10))

// console.log(areEquallyStrong(1,10,10,0))

// console.log(areEquallyStrong(10, 5, 11, 4))
