var arr = [2, 3, 5, 9, 14, 16, 18];
var start = 0,
  end = arr.length - 1;
function BinarySearch(arr, start, end) {
  const tar = 15;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === tar) {
      return arr[mid];
    }
    if (arr[mid] > tar) {
      end = mid - 1;
    } else if (arr[mid] < tar) {
      start = mid + 1;
    }
  }
  return arr[start];
}
const result = BinarySearch(arr, start, end);
console.log("Result:", result);
