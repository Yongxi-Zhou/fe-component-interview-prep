function mergeSort(nums) {
  return partition(nums, 0, nums.length - 1);
}

function partition(nums, start, end) {
  if (start == end) {
    return [nums[start]];
  } else if (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    let left = partition(nums, start, mid);
    let right = partition(nums, mid + 1, end);
    return merge(left, right);
  }
}

function merge(left, right) {
  let i = 0,
    j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }

  if (i == left.length) {
    res = res.concat(right.slice(j));
  }

  if (j == right.length) {
    res = res.concat(left.slice(i));
  }
  return res;
}

let arr = [44, 3, 23, 86, 44, 75, 55, 45, 98, 67];
console.log(mergeSort(arr));
