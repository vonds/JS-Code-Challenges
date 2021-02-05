// https://www.codewars.com/kata/57e93e4a2aee4974d4000c2f
function vestBuy(price, haggle){
    if (haggle==='light') return price*0.8
    if (haggle==='medium') return price*0.7
    if (haggle==='heavy') return price*0.6
    if (haggle==='walkandswear') return price*0.1
    return 'Run!!'
}
  