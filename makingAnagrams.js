
const createCharMap = str => {
    const charMap = {};
    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

const makingAnagrams = (string1, string2) => {
    const larger = string1.length >= string2.length ? string1 : string2;
    const smaller = string1.length < string2.length ? string1 : string2;

    const charMap = createCharMap(larger);

    let counter = 0;
    for(let char of smaller) {
        if(charMap[char] && charMap[char] > 0) {
            charMap[char]--;
            counter++;
        }
    }

    const diffOfSmaller = (smaller.length - counter);
    const diffOfLarger = (larger.length - smaller.length);
    return (2 * diffOfSmaller) + diffOfLarger;
}