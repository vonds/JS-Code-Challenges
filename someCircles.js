// https://www.codewars.com/kata/56143efa9d32b3aa65000016
const sumCircles = () => `We have this much circle: ${Math.round([...arguments].reduce((a,b) => a + ((b * 0.5) * (b * 0.5)) * Math.PI, 0))}`
