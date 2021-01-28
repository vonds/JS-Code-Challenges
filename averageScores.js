// https://www.codewars.com/kata/57b68bc7b69bfc8209000307
const average = scores => Math.round(scores.reduce((first,next) => (first + next), 0) / scores.length)