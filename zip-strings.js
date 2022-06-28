function zipStrings(strA, strB) {
  let mergedArr = [];
  let arrStrA = strA.split("");
  let arrStrB = strB.split("");
  const length = Math.max(arrStrA.length, arrStrB.length);

  for (let i = 0; i < length; i++) {
    mergedArr.push(arrStrA[i]);
    mergedArr.push(arrStrB[i]);
  }
  return mergedArr.join("");
}

//console.log(zipStrings("", "1"));
