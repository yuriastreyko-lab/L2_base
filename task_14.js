function isCircleSorted(arr) {
  let drops = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      drops++;
    }
  }
  return drops <= 1;
}
