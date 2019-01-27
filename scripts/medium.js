const mediumRequest = fetch('https://medium.com/@bhanotkaran22?format=json')
.then(function(response) {
	return response.text();
})