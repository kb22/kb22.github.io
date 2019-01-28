const mediumRequest = fetch('https://cors-anywhere.herokuapp.com/https://medium.com/@bhanotkaran22/latest')
.then(function(response) {
	if (!response.ok) {
       	return Promise.reject('Could not fetch user information from Medium');
    }
    return response.text();
}).then(text => {
	return text;
}).catch(error => {
	console.log(error);
});