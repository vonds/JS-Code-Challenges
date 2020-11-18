const automorphic = n => {
    return Math.pow(n, 2).toString().includes(n) ? "Automorphic" : "Not!!"
}