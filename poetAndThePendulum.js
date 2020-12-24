// https://www.codewars.com/kata/5bd776533a7e2720c40000e5
function pendulum(values) {
    const left = [] 
    const right = [];
    values.sort((a, b) => a - b).forEach((v, i) => (i % 2 === 0 ? left : right).push(v));
    return [...left.reverse(), ...right];
}