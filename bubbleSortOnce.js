// https://www.codewars.com/kata/56b97b776ffcea598a0006f2
const bubblesortOnce = ([h, ...t]) => {
    return t.reduce((acc, v) => {
      if (h < v) [h, v] = [v, h]
      return [...acc, v]
    }, []).concat(h || [])
}