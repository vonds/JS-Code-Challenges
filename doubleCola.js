// https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0
const whoIsNext = (names, r) => {
    while(r>names.length) r=Math.floor((r-names.length+1)/2)
    return names[r-1]
}