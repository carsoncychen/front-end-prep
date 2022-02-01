const nestedArray = [
  1,
  [2, 3],
  [4, [5, 6, 7, 8, [9, 10]]],
  11,
  [12, 13, [14, [15, 16, [17,[18, 19]]]]],
  20,
]

const flattenArray =  (array) => {
  const newArray = [];
  for (const ele of array) {
    if (Array.isArray(ele)) {
      newArray.push(...flattenArray(ele));
    } else {
      newArray.push(ele);
    }
  }

  return newArray;
}

console.log(flattenArray(nestedArray))
