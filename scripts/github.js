const userRequest = fetch('https://api.github.com/users/kb22')
.then(response => {
	if (!response.ok) {
       return Promise.reject('Could not fetch user information from GitHub');
    }
    return response.text();
}).then(text => {
	return text;
}).catch(error => {
	console.log(error);
});

const repoRequest = fetch('https://api.github.com/users/kb22/repos?sort=created')
.then(response => {
	if (!response.ok) {
       return Promise.reject('Could not fetch repos information from GitHub');
    }
    return response.text();
}).then(function(text) {
	return text;
}).catch(error => {
	console.log(error);
});