// https://www.codewars.com/kata/53a257d83cacabb1fd0007d3
const nextFiveDays = date =>{
    const day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    dates = []
    for (let i = 1; i <= 5; i++) {
      dates.push(new Date(year,month,day + i).toLocaleDateString('en-GB'))
    }
    return dates.join(', ')
}