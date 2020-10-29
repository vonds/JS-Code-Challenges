const titleCase = (title, minorWords) => {
    if(title === '') return '';
    const words = [];
    const sentence = title.toLowerCase().split(' ');
    const minor = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    
    for(let i = 0; i < sentence.length; i++) {
      if(minor.includes(sentence[i].toLowerCase()) && i !== 0) {
        words.push(sentence[i].toLowerCase());
      } else {
        words.push(sentence[i][0].toUpperCase() + sentence[i].slice(1).toLowerCase());
      }  
    }
    
    return words.join(' ')
  }