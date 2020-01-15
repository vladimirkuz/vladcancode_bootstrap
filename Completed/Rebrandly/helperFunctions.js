// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField.innerHTML = `<div class="text"><p>Sorry, your URL is invalid.</p><p>Try again.</p></div>`;
  } else {
    responseField.innerHTML = `<div class="text"><p>Your shortened url is: </p><p> ${res.shortUrl} </p></div>`;
  }
}

// Manipulates responseField to render an unformatted response
/*const renderRawResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = `<pre>${structuredRes}</pre>`;
    responseField.innerHTML = `${structuredRes}`;
  }
}*/
