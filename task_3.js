const whatCentury = year => {
  const century = Math.ceil(Number(year) / 100);
  const suffix = century === 11 || century === 12 || century === 13
    ? 'th'
    : century % 10 === 1
    ? 'st'
    : century % 10 === 2
    ? 'nd'
    : century % 10 === 3
    ? 'rd'
    : 'th';
  return `${century}${suffix}`;
};
