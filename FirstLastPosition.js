let arr = [5, 7, 7, 7, 7, 8, 8, 10];

let ans = [-1, -1];
console.log(ans);
ans[0] = searchFirstLast(arr, false);

ans[1] = searchFirstLast(arr, true);

function searchFirstLast(arr, findStartIndex) {
  let start = 0,
    end = arr.length - 1,
    res;
  const tar = 7;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > tar) {
      end = mid - 1;
    } else if (arr[mid] < tar) {
      start = mid + 1;
    } else {
      res = mid;
      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return res;
}
console.log(ans);
