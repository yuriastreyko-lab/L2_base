function expandedForm(num) {
  return String(num)
    .split('')
    .map((digit, i, arr) => digit !== '0' ? digit + '0'.repeat(arr.length - i - 1) : '')
    .filter(Boolean)
    .join(' + ');
}
