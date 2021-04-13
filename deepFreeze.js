// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056
Object.deepFreeze = function (object) {
    Object.freeze(object)
    for (let i in object){
      Object.deepFreeze(object[i])
    }
}