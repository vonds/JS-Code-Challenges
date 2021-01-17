// https://www.codewars.com/kata/57fafd0ed80daac48800019f
function remove(s){
    const marks = s.length - s.replace(/!/g, '').length
    return s.replace(/!/g, '') + '!'.repeat(marks)
}