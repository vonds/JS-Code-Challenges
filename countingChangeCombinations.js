// https://www.codewars.com/kata/541af676b589989aed0009e7
const countChange = (money, coins, i = 0) => {
    if (money < 0) return 0
    if (money === 0) return 1
    if (i === coins.length && money > 0) return 0
    return countChange(money - coins[i], coins, i) + countChange(money, coins, i + 1)
}