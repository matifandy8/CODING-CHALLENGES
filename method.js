var task_names = tasks.map((task) => task.name );   
// MAP
const numbers = [100, 200, 300];
const doubles = numbers.map(n => n * 2);

// -----------------------------------------------------------
// -------------------------------------------------
var difficult_tasks = [];
 
tasks.forEach(function (task) {       FOREACH
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});

// -----------------------------------------------------------
// -----------------------------------------------------------

// FILTER
// Using ES6
var difficult_tasks = tasks.filter((task) => task.duration >= 120 );

// -----------------------------------------------------------
// -----------------------------------------------------------

.FROM

const lastName = 'mato';
const lnArray = Array.from(lastName);

// lnArray = ['m','a','t','o']

// -----------------------------------------------------------
// -----------------------------------------------------------

REDUCE

const numbers = [1, 2, 3, 4, 5];
const factorial = numbers.reduce((acc, item) => acc * item, 1);
console.log(factorial); // 120

// -----------------------------------------------------------
// -----------------------------------------------------------

var fibBottomUp = (n) => {
    var mem = [];
    for (var i=0; i <=n; i++) {
        if (i == 0) mem[i] = 0;
        else if (i <=2) mem[i] = 1;
        else {
            mem[i] = mem[i-1] + mem[i-2];
        }
    }
    return mem[n];
}




const binarySearch = (array, target) => {
  // Define Start and End Index
  let startIndex = 0;
  let endIndex = array.length - 1;
  // While Start Index is less than or equal to End Index
  while(startIndex <= endIndex) {
    // Define Middle Index (This will change when comparing )
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    // Compare Middle Index with Target for match
    if(target === array[middleIndex]) {
      return console.log("Target was found at index " + middleIndex);
    }
    // Search Right Side Of Array
    if(target > array[middleIndex]) {
      console.log("Searching the right side of Array")
      // Assign Start Index and increase the Index by 1 to narrow search
      startIndex = middleIndex + 1;
    }
    // Search Left Side Of Array
    if(target < array[middleIndex]) {
      // Assign End Index and increase the Index by 1 to narrow search
      console.log("Searching the left side of array")
      endIndex = middleIndex - 1;
    }
    // Not found in this iteration of the loop. Looping again.
    else {
      console.log("Not Found this loop iteration. Looping another iteration.")
    }
  }
  // If Target Is Not Found
  console.log("Target value not found in array");
}



// MATRIX ARRAYS TO SINGLE ARRAY
var arrays = [
  ["$6"],
  ["$12"],
  ["$25"],
  ["$25"],
  ["$18"],
  ["$22"],
  ["$10"]
];
var merged = [].concat.apply([], arrays);

console.log(merged);

var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
// ----------------------------------------------------------------------