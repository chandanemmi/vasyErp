//Apply Binary search
var arr = ["c", "d", "f", "j"];
var start = 0,
  end = arr.length - 1,
  tar = "j";

while (start <= end) {
  const mid = Math.floor(start + (end - start) / 2);
  if (arr[mid] > tar) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(start);
console.log(arr[start % arr.length]);
