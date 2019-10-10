function range(start, end) {
  let result = [start];
  if (end === start) {
    return result;
  } else {
    return result.concat(range(start+1, end));
  }

}

function sumRec(arr) {
  let sum = arr[0];
  if (arr.length === 1) {
    return sum;
  } else {
    return sum + sumRec(arr.slice(1));
  }
}

function exp13