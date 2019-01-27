const userRequest = fetch('https://api.github.com/users/kb22')
.then(function(response) {
	return response.text();
}).then(function(text) {
	return text;
})

const repoRequest = fetch('https://api.github.com/users/kb22/repos?sort=created')
.then(function(response) {
	return response.text();
}).then(function(text) {
	return text;
})