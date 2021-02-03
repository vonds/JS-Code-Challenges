const buy = (x, arr) => {
    for(let i = 0; i < arr.length - 1; ++i)
      for(let j = i + 1; j < arr.length; ++j)
        if(arr[i] + arr[j] === x) return [i, j]
    return null
}