// https://www.codewars.com/kata/53d4eec01f1a9b3020000786
let name = 'The Window'

const alpha = {
    name : 'My Alpha',
    getNameFunc : function(){
    return function(){
        return this.name
        }.bind(this)
    }
}