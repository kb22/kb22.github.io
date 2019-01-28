const mediumRequest = fetch('https://medium.com/@bhanotkaran22')
.then(function(response) {
	if (!response.ok) {
       return Promise.reject('Could not fetch user information from Medium');
    }
    return response.text();
}).then(function(text) {
	return text;
}).catch(error => {
	console.log(error);
});