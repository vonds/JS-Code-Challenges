// https://www.codewars.com/kata/5302d655be2a91068b0001fb
const DI = function(dependency) {
    this.dependency = dependency;
}
  
DI.prototype.inject = function(func) {
    const _re = /^function\(([a-z0-9\-_,]+)\)/i
    const match_args = _re.exec(func.toString().replace(/\s/g, ''))
    let dep_names = []
    if (match_args){
      dep_names = match_args[1].split(',').map(d => this.dependency[d])
    }
    return () => func.apply({},dep_names)
}