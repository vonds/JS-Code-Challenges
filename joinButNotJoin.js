// https://www.codewars.com/kata/56dfce76b832927775000027
Array.prototype.Join = function(separator){
    return this.reduce((a, b, index) => {
      if (index > 0){
        a = a.concat(separator)
      }
      a.push(b)
      return a
    }, [])
}