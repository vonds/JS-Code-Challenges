// 
function caffeine(c, number) {
    let coffee = 0;
    if (c === 'espresso') coffee = number * 1
    if (c === 'double espresso') coffee = number * 2
    if (c === 'flat white') coffee = number * 2
    if (c === 'latte') coffee = number * 1
    if (c === 'mocha') coffee = number * 2
    if (c === 'decaf') coffee = number * 0
    if (coffee === 0) return "You haven't even had coffee today!"
    if (coffee < 4) return "The doctor won't be worried yet!"
    if (coffee === 4) return "You can have 2 more shots then no more!"
    if (coffee === 5) return  "You can only have an espresso, latte or a decaf now"
    if (coffee === 6) return   "Only decaf for you now!"
    return "Only decaf for you now!"
}