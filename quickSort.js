function quickSort(nums) {
  sort(nums, 0, nums.length - 1);
  return nums;
}

function sort(nums, start, end) {
  if (start < end) {
    let pivot = partition(nums, start, end);
    sort(nums, start, pivot - 1);
    sort(nums, pivot + 1, end);
  }
}

function partition(nums, start, end) {
  let random = Math.floor(Math.random() * (end - start + 1) + start);
  let pivot = nums[random];
  swap(nums, end, random);
  let wall = start;

  for (let i = start; i < end + 1; i++) {
    if (nums[i] < pivot) {
      swap(nums, i, wall++);
    }
  }
  swap(nums, end, wall);
  return wall;
}

function swap(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

let arr = [44, 3, 23, 86, 44, 75, 55, 45, 98, 67];
console.log(quickSort(arr));
