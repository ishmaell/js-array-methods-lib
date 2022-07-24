function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }

  return newArray;
}

function filter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element, i, array)) newArray.push(element);
  }
  return newArray;
}

function reduce(array, callback, initialValue) {
  let currentValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (initialValue == null && i == 0) {
      currentValue = element;
    } else {
      currentValue = callback(currentValue, element, i, array);
    }
  }
  return currentValue;

}

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) return true;
  }
  return false;
}

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) return false;
  }
  return true;
}

function flat(array, depth = 1) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element) && depth > 0) {
      newArray.push(...flat(element, depth - 1));
    } else {
      newArray.push(element);
    }
  }
  return newArray;
}

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element, i, array)) return element;
  }
}

const arr = [1, 2, [3, [4, [5]]]];
console.log(flat(arr));

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find
}