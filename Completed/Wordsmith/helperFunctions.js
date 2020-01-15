// Formats response to look presentable on webpage


const renderResponse = (res, word) => {

  // Handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = `<div class="text"><p>Try again!</p><p>There were no suggestions found!</p>`;
    return;
  }

  // Creates an empty array to contain the HTML strings
  let wordList = [];
  // Loops through the response and caps off at 10
  for(let i = 0; i < Math.min(res.length, 12); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<div class="text"><p>Words that rhyme with ${word}:</p><ol>${wordList}</ol></div>`;
  return
}
