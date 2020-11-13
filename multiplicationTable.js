const multiplicationTable = size => {
    const chunked = []
    let counter = 0
    let multi = 0
    for(let i = 1; i <= Math.pow(size, 2); i++) {
      const last = chunked[chunked.length - 1]
      if(last && last.length !== size) {
        counter++
        last.push(counter * multi)
      } else {
        counter = 1;
        multi++
        chunked.push([counter * multi])
      }
    }
    return chunked
  }