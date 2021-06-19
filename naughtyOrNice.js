// https://www.codewars.com/kata/52a6b34e43c2484ac10000cd
function getNiceNames(people){
    return people.filter(p => p.wasNice).map(p => p.name);
}
  
function getNaughtyNames(people){
    return people.filter(p => !p.wasNice).map(p => p.name);
}