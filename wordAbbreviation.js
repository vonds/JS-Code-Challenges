// const abbreviate = string => {
//     const strArray = string.includes('-') ? string.split('-') : string.split(' ');
//     const complexStr = [];
//     let abbreviated = '';
//     let wordLength;

//     for(let word of strArray) {
//         first = word[0];
//         last = word[word.length - 1];
//         wordLength = word.substring(1, word.length -1).length
//         if(strArray.length > 1) {
//             abbreviated = first + wordLength + last;
//             complexStr.push(abbreviated);
//             if(strArray.length === complexStr.length) abbreviated = complexStr.join('-')
//         } else {
//             abbreviated = first + wordLength + last;
//         }
        
//     }
//     return abbreviated;
// }

function abbreviate(string) {
    return string.replace(/\w{4,}/g, word => {
      return word[0] + (word.length - 2) + word.slice(-1);
    });
  }

