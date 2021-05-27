// https://www.codewars.com/kata/5220b7f77e831a7e79000417
function generateRules(func, portList){
    let str = ''
    for(let i = 0; i < portList.length; i++) str += func(portList[i])
    return str
}