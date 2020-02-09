/**
 * The function should return the lowest number of the most frequently sighted number in input array
 * ([1, 2, 3, 1, 4, 3]) => 1
 * @param arr {Array}
 * @returns {number}
 */
const migratoryBirds = (arr) => {
  const objCounts = {};
  let resultVal = null;
  for (let i = 0; i < arr.length; i++) {
    if (!objCounts[arr[i]]) {
      objCounts[arr[i]] = 1;
    } else {
      objCounts[arr[i]]++;
    }
  }
  for (let count in objCounts) {
    if (Object.prototype.hasOwnProperty.call(objCounts, count)) {
      (resultVal === null) && (resultVal = count);
      (objCounts[count] > objCounts[resultVal]) && (resultVal = count);
    }
  }
  return +resultVal;
}

/**
 * The function should return the smallest lexicographically higher string possible from the given string or no answer;
 * ('abcd') => 'abdc'
 * @param word {string}
 * @returns {string}
 */
const biggerIsGreater = (word) => {
  const wordArr = [...word];
  const wordArrLength = wordArr.length;
  let result = 'no answer';
  if (wordArrLength && wordArrLength <= 100) {
    for (let j = 0; j < wordArrLength; j++) {
      for (let i = (wordArrLength - 1); i > 0; i--) {
        const lastChar = wordArr[i];
        wordArr[i] = wordArr[i - 1];
        wordArr[i - 1] = lastChar;
        const iterationResult = wordArr.join('');
        if (iterationResult > word) {
          result = iterationResult;
          j = wordArrLength;
          break;
        }
      }
    }
  }
  return result;
}

/**
 *
 * @param arr
 */
const miniMaxSum = (arr) => {
  const sortArrayFunction = (vector) => (a, b) => vector === 'max' ?  a - b : b - a;
  const getMaxMinSumFromArr = (val, array) => {
    const arr = [...array];
    return arr.sort(sortArrayFunction(val)).slice(1, arr.length).reduce((sum, current) => sum + current, 0);
  }
  const maxSumArr = getMaxMinSumFromArr('max', arr);
  const minSumArr = getMaxMinSumFromArr('min', arr);
  console.log(`${minSumArr} ${maxSumArr}`);
}

/**
 *
 * @param arr
 * @returns {number}
 */
const diagonalDifference = (arr) => {
  const array = [...arr];
  const reverseArray = [...arr].reverse();
  const counts = {
    leftToRight: 0,
    rightToLeft: 0,
  }
  for (let i = 0; i < arr.length; i++) {
    counts.leftToRight += array[i][i];
    counts.rightToLeft += reverseArray[i][i];
  }
  return Math.abs(counts.leftToRight - counts.rightToLeft);
}

/**
 *
 * @param arr
 * @returns {number}
 */
const birthdayCakeCandles = (arr) => {
  const maxVal = [...new Set(arr)].sort((a, b) => b - a)[0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    (arr[i] === maxVal) && count++;
  }
  return count;
}

/**
 *
 * @param grades
 * @returns {...*[]}
 */
const gradingStudents = (grades) => {
  const arrGrades = [...grades];
  for (let i = 0; i < arrGrades.length; i++) {
    if (arrGrades[i] >= 38 && ((arrGrades[i] % 5) > 2)) {
      arrGrades[i] += (5 - (arrGrades[i] % 5))
    }
  }
  return arrGrades;
}

/**
 *
 * @param s
 * @param t
 * @param a
 * @param b
 * @param apples
 * @param oranges
 */
const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const counts = {
    apples: 0,
    oranges: 0,
  };
  apples.forEach(item => {
    if (s <= (item + a) && (item + a) <= t) {
      counts.apples++;
    }
  });
  oranges.forEach(item => {
    if (s <= (item + b) && (item + b) <= t) {
      counts.oranges++;
    }
  })
  console.log(counts.apples + "\n" + counts.oranges);
}





/* Two numbers sum */
/**
 * ([3,5,-4,8,11,1,-1,6], 10) => [11, -1]
 * @param arr (Array of numbers)
 * @param targetSum (number)
 * @returns {[]}
 */

// O(n^2) time | 0(1) space
const twoNumSum1 = (arr, targetSum) => {
  const length = arr.length;
  let result = [];
  for (let i = 0; i < length - 1; i++) {
    const first = arr[i];
    for (let j = i + 1; j < length; j++) {
      const second = arr[j];
      if (first + second === targetSum) {
        result = [first, second];
        break
      }
    }
  }
  return result;
}

// O(n) time | O(n) space
const twoNumSum2 = (arr, targetSum) => {
  const nums = {};
  let result = [];
  for (let num of arr) {
    const y = targetSum - num;
    if (nums[y]) {
      result = [num, y];
      break;
    } else {
      nums[num] = true;
    }
  }
  return result;
}

// O(nlog(n)) time | O(1) space
const twoNumSum3 = (arr, targetSum) => {
  arr.sort((a, b) => a - b);
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      result = [arr[left], arr[right]];
      break;
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return result;
}





/* Fibonacci */
/**
 * @param n (Number)
 * @returns {number|*}
 */

// O(2^n) time | O(n) space
const fib1 = (n) => {
  if (n === 2) {
    return 1;
  }
  if (n === 1) {
    return  0;
  }
  return fib1(n - 1) + fib1(n - 2);
}

// O(n) time | O(n) space
const fib2 = (n, memo = {1: 0, 2: 1}) => {
  if (n in memo) {
    return memo[n];
  }
  const nFib = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = nFib;
  return nFib;
}

// O(n) time | O(1) space
const fib3 = (n) => {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return lastTwo[n > 1 ? 1 : 0];
};





/* Product sum */
/**
 * ([5, 2, [7, -1], 3, [6, [-13, 8], 4]]) => 12
 * @param arr
 * @param multiplier
 * @returns {number}
 */
// O(n) time | O(d) space (d - count of recursive calls or sub arrays)
const productSum = (arr, multiplier = 1) => {
  let sum = 0;
  for (let el of arr) {
    if (Array.isArray(el)) {
      sum += productSum(el, multiplier + 1);
    } else {
      sum += el;
    }
  }
  return sum * multiplier;
};




/* Binary search */
/**
 * ([1,2,3,5,7,8], 5) => 3
 * @param array
 * @param target
 * @returns {number|undefined}
 */
// O(log(n)) time | O(log(n)) space
const binarySearch1 = (array, target) => {
  const binarySearchHelper = (array, target, left, right) => {
    if (left > right) {
      return -1;
    }
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (potentialMatch === target) {
      return middle;
    }
    if (potentialMatch > target) {
      return binarySearchHelper(array, target, left, middle - 1);
    }
    return binarySearchHelper(array, target, middle + 1, right);
  };
  return binarySearchHelper(array, target, 0, array.length - 1);
}

// O(log(n)) time | O(log(n)) space
const binarySearch2 = (array, target) => {
  const binarySearchHelper = (array, target, left, right) => {
    let index = -1;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const potentialMatch = array[middle];
      if (potentialMatch === target) {
        index = middle;
        break;
      }
      if (potentialMatch > target) {
        right--;
      } else {
        left++;
      }
    }
    return index;
  };
  return binarySearchHelper(array, target, 0, array.length - 1);
}




/* Find three largest numbers */

/**
 * ([1, 326, 8, 44]) => [8, 44, 326]
 * @param array
 * @returns {number|null[]}
 */
// O(n) time | O(1) space
const findThreeLargestNumbers = (array) => {
  const shiftAndUpdate = (arr, num, index) => {
    for (let i = 0; i < index + 1; i++) {
      i === index ? arr[i] = num : arr[i] = arr[i + 1];
    }
  };

  const updateLargest = (threeLargestArr, num) => {
    const getIfNeedShift = index => threeLargestArr[index] === null || num > threeLargestArr[index];

    for (let i = 2; i >= 0; i--) {
      if (getIfNeedShift(i)) {
        shiftAndUpdate(threeLargestArr, num, i);
        break;
      }
    }
  }

  const threeLargest = [null, null, null];
  for (let num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
};
