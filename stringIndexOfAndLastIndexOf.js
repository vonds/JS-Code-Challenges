// https://www.codewars.com/kata/52fa7b5704bc8f7c85000d32
String.prototype.indexOf = function(value, fromIndex){
    _re = value instanceof RegExp ? value : new RegExp(value, "g")
    fromIndex = fromIndex || 0
    const i = _re.toString().startsWith("/^") ? 0 : fromIndex
    const matches = _re.exec(this.slice(i))
    return matches && i >= fromIndex ? matches.index + fromIndex : -1 
  }
  
  String.prototype.lastIndexOf = function(value, fromIndex){
    _re = value instanceof RegExp ? value : new RegExp(value, "g")
    fromIndex = fromIndex || this.length
    let pos_idx = -1
    let i = 0
    let matches
    while (matches = _re.exec(this.slice(i))) {
      if (matches.index + i > fromIndex)
        return pos_idx
      pos_idx = matches.index + i
      i++
    }
    return pos_idx
}