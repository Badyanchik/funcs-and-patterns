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
