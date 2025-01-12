/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function sumArrays(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  return Array.from(
    { length: maxLength },
    (_, i) => (arr1[i] || 0) + (arr2[i] || 0)
  );
}

function findElement(arr, value) {
  return arr.indexOf(value);
}

function findAllOccurrences(arr, item) {
  return arr.reduce((count, i) => count + (i === item ? 1 : 0), 0);
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

function getAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return +(sum / arr.length).toFixed(2);
}

function isSameLength(arr) {
  return arr.every((str) => str.length === arr[0].length);
}

function isValueEqualsIndex(arr) {
  return arr.some((value, index) => value === index);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  if (n === 0) {
    return [];
  }
  return arr.slice(-n);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function toStringList(arr) {
  return arr.join(',');
}

function distinct(arr) {
  return Array.from(new Set(arr));
}

function createNDimensionalArray(n, size) {
  if (n === 1) return new Array(size).fill(0);
  return new Array(size)
    .fill(0)
    .map(() => createNDimensionalArray(n - 1, size));
}

function flattenArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function calculateBalance(arr) {
  return arr.reduce(
    (balance, [income, expense]) => balance + (income - expense),
    0
  );
}

function createChunks(arr, chunkSize) {
  return arr.reduce((chunks, _, i) => {
    if (i % chunkSize === 0) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }, []);
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

function getElementByIndices(arr, indices) {
  return indices.reduce((current, index) => current[index], arr);
}

function getFalsyValuesCount(arr) {
  return arr.filter((value) => !value).length;
}

/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {array} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix(/* n */) {
  throw new Error('Not implemented');
}

function getIndicesOfOddNumbers(numbers) {
  return numbers.reduce((indices, num, i) => {
    if (num % 2 !== 0) indices.push(i);
    return indices;
  }, []);
}

function getHexRGBValues(arr) {
  return arr.map(
    (num) => `#${num.toString(16).toUpperCase().padStart(6, '0')}`
  );
}

function getMaxItems(arr, n) {
  return arr.sort((a, b) => b - a).slice(0, n);
}

function findCommonElements(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {array} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence(/* nums */) {
  throw new Error('Not implemented');
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

function shiftArray(arr, n) {
  const len = arr.length;
  if (len === 0) return [];
  const shift = ((n % len) + len) % len;
  return arr.slice(-shift).concat(arr.slice(0, -shift));
}

function sortDigitNamesByNumericOrder(arr) {
  const digitOrder = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return arr
    .slice()
    .sort((a, b) => digitOrder.indexOf(a) - digitOrder.indexOf(b));
}

function swapHeadAndTail(arr) {
  const len = arr.length;
  if (len < 2) return arr;
  const mid = Math.floor(len / 2);
  const head = arr.slice(0, mid);
  const tail = arr.slice(-mid);
  return len % 2 === 0 ? tail.concat(head) : tail.concat(arr[mid], head);
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
