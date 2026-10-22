function ipv4Parser(ip, mask) {
  const ipOctets = ip.split('.').map(Number);
  const maskOctets = mask.split('.').map(Number);

  const networkOctets = [];
  const hostOctets = [];

  for (let i = 0; i < 4; i++) {
    networkOctets.push(ipOctets[i] & maskOctets[i]);
    hostOctets.push(ipOctets[i] & (~maskOctets[i] & 255));
  }

  return [networkOctets.join('.'), hostOctets.join('.')];
}
