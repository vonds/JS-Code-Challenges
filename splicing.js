// https://www.codewars.com/kata/52f29bab392fb83e0d000656
Array.prototype.removeValue = function(thing) {
    if (this.indexOf(thing) == -1) return false
    let i
    while ((i = this.indexOf(thing)) > -1) this.splice(i,1)
    return this
}