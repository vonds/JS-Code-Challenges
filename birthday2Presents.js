// https://www.codewars.com/kata/551f37452ff852b7bd000139
function present(x, y){
    if (x==='badpresent') return'Take this back!'
    if (x==='dog') return  `pass out from excitement ${y} times`
    if (x==='crap') return 'acpr'
    if (x==='empty') return 'empty'
    if (x==='bang') return x.split('').reduce((a,b)=>a+(b.charCodeAt()-y),0)
    return x.split('').map(v=>String.fromCharCode(v.charCodeAt()+y)).join('')
}