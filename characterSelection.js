// https://www.codewars.com/kata/5853213063adbd1b9b0000be
function streetFighterSelection(fighters, [y, x], moves){
  return moves.map(move => {
    if (move === "up") {
      y = 0
    } else if (move === "down") {
      y = 1
    } else if (move === "right") {
      x = x === 5 ? 0 : x + 1
    } else if (move === "left") {
      x = x === 0 ? 5 : x - 1
    }
    return fighters[y][x]
  })
}
