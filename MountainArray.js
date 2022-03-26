let arr = [1, 2, 3, 5, 3, 1];
let start = 0,
  end = arr.length - 1,
  tar = 1;
let peak = PeakIndexMountainArray(arr, start, end);
let firstTry = OrderAgnostic(arr, tar, (start = 0), peak);
if (firstTry != -1) {
  console.log(firstTry);
} else console.log(OrderAgnostic(arr, tar, peak + 1, end));
function PeakIndexMountainArray(arr, start, end) {
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
  return end; //end index
}

function OrderAgnostic(arr, tar, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === tar) {
      return arr[mid];
    }
    if (arr[0] > arr[arr.length - 1]) {
      if (arr[mid] < tar) {
        end = mid - 1;
      } else if (arr[mid] > tar) {
        start = mid + 1;
      }
    } else {
      if (arr[mid] > tar) {
        end = mid - 1;
      } else if (arr[mid] < tar) {
        start = mid + 1;
      }
    }
  }
  return -1;
}
