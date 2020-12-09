// https://www.codewars.com/kata/58bf79fdc8bd4432d6000029
function slogans(p, r, len = r.length) {
    return len ? 
        ( p.endsWith(r.slice(0,len)) ?  
            1 + slogans(p,r.slice(len)) : 
            slogans(p,r,len-1) ) : 
        0
}