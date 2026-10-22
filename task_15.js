function howManyTimes(time1, time2) {
  const prefixStrikes = new Array(43201).fill(0);

  for (let i = 0; i < 43200; i++) {
    const hour = Math.floor(i / 3600);
    const minute = Math.floor((i % 3600) / 60);
    const second = i % 60;
    let strike = 0;

    if (minute === 0) {
      let numStrikes = (hour + 12) % 12;
      if (numStrikes === 0) numStrikes = 12;
      if (second < numStrikes) strike = 1;
    } else if (minute === 30) {
      if (second === 0) strike = 1;
    }
    prefixStrikes[i + 1] = prefixStrikes[i] + strike;
  }

  function toSeconds(timeStr) {
    const [datePart, timePart] = timeStr.split(' ');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);
    return Date.UTC(year, month - 1, day, hours, minutes, seconds) / 1000;
  }

  function getStrikes(seconds) {
    const fullCycles = Math.floor(seconds / 43200);
    const rem = seconds - fullCycles * 43200;
    return fullCycles * 90 + prefixStrikes[rem];
  }

  const sec1 = toSeconds(time1);
  const sec2 = toSeconds(time2);

  return getStrikes(sec2) - getStrikes(sec1);
}
