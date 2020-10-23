const capitalize = string => {
    if (!string) return string;
    return string[0].toUpperCase() + string.slice(1);
  };
  
export const capitalizeWords = words => {
    const wordsArray = words.split(' ');
  
    // single word
    if (wordsArray.length === 1) {
      return capitalize(words);
    }
  
    // multiple words
    return wordsArray.reduce((accumulatedWords, word) => {
      // first word
      if (!accumulatedWords) return capitalize(word);
  
      // empty array item
      if (!word) return accumulatedWords;
  
      // concatenate word
      return `${accumulatedWords} ${capitalize(word)}`;
    }, '');
  };