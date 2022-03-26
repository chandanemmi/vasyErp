let arr = [1, 2, 3, 1];
let start = 0;
let end = arr.length - 1;

while (start < end) {
  let mid = Math.floor(start + (end - start) / 2);
  if (arr[mid] > arr[mid + 1]) {
    end = mid; //you are in  dec
    // part of array,This may be the ans.But look  at left.This is
    // why end!=mid-1
  } else {
    start = mid + 1;
  }
}
console.log(end); //end index
