function yourOrderPlease(words){
    if(words === '') return '';
    const result = [];
    let newArr = words.split(' ');
    let index = 1;
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i].indexOf(index) > -1) {
        result.push(newArr[i]);
        index++;
        i =- 1;
      }
    }
    return result.join(' ');
  }