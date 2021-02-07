// https://www.codewars.com/kata/52af0d380fcae83a560008af
const handOutGift = (function() {
    const list = []
    return function(name) {
      if(list.includes(name))throw new 'You\'ve already got a gift'
      else list.push(name)
    }
})()