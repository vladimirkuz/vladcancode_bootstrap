// information to reach API
const apiKey = '4962b04672764bebb6b4c9052a810404';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX function ES8
async function getData() {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  try{const response = await fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json',
			'apikey': apiKey
    }
  })

  const jsonResponse = await response.json();
  renderResponse(jsonResponse); // helper function

  }catch(error){
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getData();
}

shortenButton.addEventListener('click', displayShortUrl);
