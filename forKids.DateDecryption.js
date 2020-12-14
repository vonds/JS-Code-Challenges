// https://www.codewars.com/kata/5887140d2640aea82f0000d3
function translateDate(dateStr){
    return dateStr.replace(/[^-]/g, v => (v.charCodeAt() - 50).toString().padStart(2, 0))
}