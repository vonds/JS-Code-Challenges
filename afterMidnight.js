// https://www.codewars.com/kata/56fac4cfda8ca6ec0f001746
function dayAndTime(n) {
    let days = 'Sun Mon Tues Wednes Thurs Fri Satur'.split` `.map(e => e + 'day');
    let mod = m => ((n % m) + m) % m, pad = m => ('0' + m).slice(-2);
    return days[mod(10080) / 1440 | 0] + ' ' 
         + pad(mod(1440) / 60 | 0) + ':'
         + pad(mod(60) | 0);
}