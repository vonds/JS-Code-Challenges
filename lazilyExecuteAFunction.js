// https://www.codewars.com/kata/5458d4d2cbae2a9438000389
const make_lazy = function(fn) {
    return fn.bind.apply(fn, arguments);
}