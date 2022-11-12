// foreach의 내부적 구현
const forEach = (array, fn) => {
  let i;

  for (i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};

export default forEach;

// foreach가 구현되기 위해 객체 키 반복->키의 쌍인 객체 확인 -> 키의 값 취득 구현
export const forEachObject = (obj, fn) => {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      fn(property, obj[property]);
    }
  }
};

export const unless = (predicate, fn) => {
  if (!predicate) {
    fn();
  }
};

//배열의 모든 값이 참인 지 확인
export const every = (arr, fn) => {
  let result = true;

  for (const value of arr) {
    result = result && fn(value);
  }

  return result;
};

//배열의 값 중 참이 존재하면 참을 반환
export const some = (arr, fn) => {
  let result = false;

  for (const value of arr) {
    result = result || fn(value);
  }

  return result;
};

export const sortBy = (property) => {
  return (a, b) => {
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result;
  };
};
