// https://www.codewars.com/kata/5b16490986b6d336c900007d
function myLanguages(results) {
    const lang = []
    for(let language in results) {
      if(results[language] >= 60) lang.push(language)
    }
    return lang.sort((a, b) => results[b] - results[a])
}