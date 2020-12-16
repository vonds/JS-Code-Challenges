const createDictionary = arr => {
    const dictionary = {}
    for(let word of arr) {
        dictionary[word] = dictionary[word] + 1 || 1
    }
    return dictionary
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    const magazineDictionary = createDictionary(magazine)
    for(let word of note) {
        if(!magazineDictionary[word]) return console.log('No')
        magazineDictionary[word]--
    }
    return console.log('Yes')
}