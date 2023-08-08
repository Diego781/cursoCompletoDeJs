// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1 - understand the problem
// - What is temp amplitude? Answer: Difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? and what to do ?

// 2 - Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find the min value in temp array
// - Subtract min from max and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2:
// function should now receive 2 arrays of temps

// 1 - understand the problem
// Merging the arrays

// 2 - Breaking up into sub-problems
// merge two arrays
const calcTempAmplitudeBug = function (T1, T2) {
  const temps = T1.concat(T2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    debugger;
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  console.log(typeof measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(`...${data1[1]}ºC...`);
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${[i + 1]} days... `;
  }
  console.log("---" + str);
};
printForecast(data2);

// 1 - Understanding the Problem
// - Array transformed to string ,separated by ...
// What is the X days? Answer: index + 1

// 2 - Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - String needs to contain day ( index + 1)
// - Add ... between elements and start and end of string

// 0
// [2,3,4..]
