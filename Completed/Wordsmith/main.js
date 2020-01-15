// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');


// GET AJAX function to Datamuse API
async function getData() {

	const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;

	try {
		const response = await fetch(endpoint);
		if (response.ok) {
			const jsonResponse = await response.json();
			renderResponse(jsonResponse, wordQuery);
		}
		throw new Error('Request Failed!');
	} catch (error) {
		console.log(error);
	}

}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getData();
}

submit.addEventListener('click', displaySuggestions);
