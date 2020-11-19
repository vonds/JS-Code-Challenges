function minValue(values){
    let str = ''
    const sortedArr = values.sort((a, b) => a - b)
    const set =  new Set(sortedArr)
    set.forEach(num => str += num.toString())
    return +str
}
  