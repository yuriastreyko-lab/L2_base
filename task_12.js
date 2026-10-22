function longest(arr, n) {
  return arr
    .map((word, index) => ({ word, index }))
    .sort((a, b) => b.word.length - a.word.length || a.index - b.index)
    .map(item => item.word)[n - 1];
}
