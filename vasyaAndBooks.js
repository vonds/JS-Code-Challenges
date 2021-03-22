// https://www.codewars.com/kata/5522ebbd20cc1cf7980014e7
function bookIsDay(pages, days){
    let index = 0
    let dayofweek
      while (pages > 0){
        pages = pages - days[index]
        if (index == 6 && pages > 0){
          index = 0
        } else {
          index++
        }
      }
      dayofweek = index
      return dayofweek
  }
  