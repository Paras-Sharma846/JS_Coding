// 1. String is Palindrome or not.
function isPalindrome(str) {
  let len = str.length;
  console.log("length=========", len);

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

let app = "madam";
// console.log(isPalindrome(app));


// 4. find Missing Number from array

// function missingNumber (arr,n){
//     let missingNum = [];

//     let isPresent = new Array(n+1).fill(false);
//     console.log(isPresent,'========isMissingNumber==========');
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<=n){
//             // console.log('======arr========',arr[i]);
//             isPresent[arr[i]] = true;
//             console.log('================================',isPresent[arr[i]]);
//         }
//     }

//     for(let i=1; i<=n;i++){
//         console.log('======',!isPresent[i]);
//         if(!isPresent[i]){
//             missingNum.push(i);

//         }
//     }
//     return missingNum;
// }



function missingNum(arr,){
  let missingNum = [];
  let isPresent = new Array(n+1).fill(flase);
  for(let i=0; i<arr.length; i++){
    if(arr[i]==n){
      isPresent[arr[i]] = true;
    }
  }
  for(let i =1;i<=n;i++){
    if(!isPresent[i]){
      missingNum.push(i);
    }
  }
  
}

// let array = [1,3,5,9];
// let n=5;
// console.log(missingNumber(array,n));

// 5. find missing odd numbers in array
function findMissingOddNumbers(arr, n) {
  let missing = [];
  let maxOdd = n * 2 - 1; // missing numbers ka case me increment +2 se hoga isliya 2 se multiply kiya hai odd number pe chla ga
  console.log("maxOdd========", maxOdd);

  for (let i = 1; i <= maxOdd; i += 2) {
    // ye to 1 se lekar 13 tk pura chla ga 1,3,5,7,9,11,13 tk outer loop
    let isPresent = false;

    for (let j = 0; j < arr.length; j++) {
      // ye loop jo array hma diya hai uspe chla ga 1,3,5,9,13
      console.log("=======j===in first loop========", arr[j]);
      console.log("=======i=====2nd loop======", i);
      if (arr[j] === i) {
        // ye condition check krna ka liya outer loop me or inner loop me konse missing hai
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      // jo jo missing using missing array ke ander dal do
      missing.push(i);
    }
  }
  return missing;
}

// let arr = [1, 3, 5, 9, 13];
// let n = 7;
// console.log(findMissingOddNumbers(arr, n));

// 6. find index of targets
function findIndexForTarget(arr, target) {
  let result = [];
  function backtrack(start, currentSum, currentIndices) {
    if (currentSum === target) {
      result.push([...currentIndices]);
      return;
    }
    if (currentSum > target) {
      return;
    }
    for (let i = start; i < arr.length; i++) {
      currentIndices.push(arr[i]);
      backtrack(i + 1, currentSum + arr[i], currentIndices);
      currentIndices.pop();
    }
  }
  backtrack(0, 0, []);
  return result;
}

// let arr = [0,2,3,4];
let target = 9;
// let index = findIndexForTarget(arr, target);
// console.log(index);

// reverse a array
function reverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}

// let arr = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr));

// find max element in array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let a = [5, 1, 7, 11, 0, 12];
// console.log(findMax(a));

// find pairs of numbers
function findPairs(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log("===============");
        pairs.push(arr[i], arr[j]);
      }
    }
  }
  return pairs;
}

// let b = [1,2,3,4,5]
// let targets = 12

// console.log('find pairs',findPairs(b, targets));

// merge two array
function mergeArrays(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    let exists = false;
    for (let j = 0; j < merged.length; j++) {
      if (arr2[i] === merged[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      merged.push(arr2[i]);
    }
  }
  return merged;
}

let ar1 = [1, 2, 3, 4, 51];
let ar2 = [2, 7, 11, 9, 1];
// console.log(mergeArrays(ar1, ar2));

// linear search
function linearSearch(array, target) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (array[i] === target) {
      console.log("=========found");
      return i;
    }
  }
  return "not found";
}

// console.log(linearSearch(x, t))

// binary search
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  console.log("==========start==========", start);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("=========mid=======", mid);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      console.log("target is greater than mid");
      start = mid + 1;
    } else {
      console.log("target is smaller than mid");
      end = mid - 1;
    }
  }

  return -1;
}

let x = [1, 3, 5, 7];
let t = 1;
// console.log(binarySearch(x, t));

// bubble sort 

function bubbleSort(a) {
for(let i = 0; i < a.length-1; i++) {
  for(let j = 0; j < a.length-1-i; j++){
    // console.log(a[j],'=========j====')
    if(a[j] > a[j+1]){
      console.log('===j=====',a[j])
  let temp = a[j];
  a[j] = a[j+1];
  a[j+1] = temp;
    }
  }
}
return a;

}

let y = [10,4,1,7,8];
// console.log(bubbleSort(y))


function isDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      let isPresent = false;
      for (let j = 0; j < result.length; j++) {
          if (arr[i] === result[j]) {
              isPresent = true;
              break;
          }
      }
      if (!isPresent) {
          result.push(arr[i]);
      }

      for (let k = 0; k < result.length - 1; k++) {
          for (let l = 0; l < result.length - k - 1; l++) {
              if (result[l] > result[l + 1]) {
                  let temp = result[l];
                  result[l] = result[l + 1];
                  result[l + 1] = temp;
              }
          }
      }
  }

  return result;
}

let arr = [1, 6, 2, 3, 6,22, 2, 9, 7,11];
// console.log(isDuplicate(arr));


//  find the two-digit elements, remove duplicates, and sort the resulting array
function proceesArray(arr){
  let result  = [];
  for(let i =0 ;i<arr.length;i++){
    if(arr[i]>=10 && arr[i]<=99 && !result.includes(arr[i])){
      result.push(arr[i]);
    }
  }
    for(i=0;i<result.length-1;i++){
      for(j=0;j<result.lenght - i -1 ;j++){
        if (result[j] > result[j + 1]) {
          let temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
      }
      }

    }
    return result;
  
}

let arr5 = [11, 2, 1, 25, 27, 11, 1];
// console.log(proceesArray(arr5));

//  function to find the intersection (common elements) of two arrays.

function findIntersection(arr1, arr2) {
  let intersection = [];
  for(let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
  }
  }
  return intersection;
}

let arr12 = [1, 2, 3, 4];
let arr13 = [3, 4, 5, 6];
console.log(findIntersection(arr12, arr13));