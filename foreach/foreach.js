/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
console.log("Exercise_1")

function doubleValues(arr) {
  const doubledArray = [];

  for (let i = 0; i < arr.length; i++) {
    doubledArray.push(arr[i] * 2);
  }
  return doubledArray;
}

const testCase1 = doubleValues([1, 2, 3]);
console.log("Test Case 1:", testCase1);  
const testCase2 = doubleValues([5, 1, 2, 3, 10]);
console.log("Test Case 2:", testCase2);  

console.log("==========================")

/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
console.log("Exercise_2")
function onlyEvenValues(arr) {
  const evenValuesArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenValuesArray.push(arr[i]);
    }
  }
  return evenValuesArray;
}
const testCase4 = onlyEvenValues([1, 2, 3]);
console.log("Test Case 1:", testCase4);  
const testCase5 = onlyEvenValues([5, 1, 2, 3, 10]);
console.log("Test Case 2:", testCase5);  

console.log("==========================")
/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
console.log("Exercise_3")
function showFirstAndLast(arr) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    const currentString = arr[i];
    if (currentString.length >= 2) {
      const firstAndLast = currentString[0] + currentString[currentString.length - 1];
      resultArray.push(firstAndLast);
    } else {
      resultArray.push(currentString);
    }
  }
  return resultArray;
}

const testCase6 = showFirstAndLast(['colt', 'matt', 'tim', 'udemy']);
console.log("Test Case 1:", testCase6);  
const testCase7 = showFirstAndLast(['hi', 'goodbye', 'smile']);
console.log("Test Case 2:", testCase7);  

console.log("==========================")
/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
console.log("Exercise_4")
function addKeyAndValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    arr[i][key] = value;
  }
  return arr;
}
const inputArray = [
  { name: 'Elie' },
  { name: 'Tim' },
  { name: 'Matt' },
  { name: 'Colt' }
];

const result = addKeyAndValue(inputArray, 'title', 'instructor');
console.log(result);

console.log("==========================")
/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/
console.log("Exercise_5")
function vowelCount(str) {
  const vowelCounts = {};
  const lowerCaseStr = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of lowerCaseStr) {
    if (vowels.includes(char)) {
      vowelCounts[char] = (vowelCounts[char] || 0) + 1;
    }
  }
  return vowelCounts;
}
console.log(vowelCount('Elie')); 
console.log(vowelCount('Tim'));  
console.log(vowelCount('Matt')); 
console.log(vowelCount('hmmm'));  
console.log(vowelCount('I Am awesome and so are you'));  

console.log("==========================")