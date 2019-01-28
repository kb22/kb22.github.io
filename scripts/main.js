Promise.all([userRequest, repoRequest, mediumRequest]).then(function(values) {
	
	var projectsCount = document.getElementById('projects-count');
    var profileImage = document.getElementById('profile-image');
    var imageElement = document.createElement('img');
    imageElement.style.borderRadius = "50%";

	if (values[0] !== undefined) {
		const userInfo = JSON.parse(values[0]);
	    projectsCount.innerHTML = "I have worked on " + userInfo.public_repos + " projects.";
	    imageElement.src = userInfo.avatar_url;
	} else {
		projectsCount.innerHTML = "I have worked on many projects.";
		imageElement.src = 'images/default_profile.png';
	}

	profileImage.appendChild(imageElement);

	var projectsList = document.getElementById('projects-list');

	if (values[1] !== undefined) {
		const repoInfo = JSON.parse(values[1]);
		createReposList(projectsList, repoInfo);
	} else {
		createReposList(projectsList, []);
	}

	document.getElementById('loader').style.display="none";
    document.getElementById('content').style.display="block";
})

createReposList = (projectsList, repoInfo) =>{
	if (repoInfo.length === 0) {
    	var colElement = document.createElement('div');
    	colElement.classList.add('list-group-item')
    	colElement.innerHTML = '<a target="_blank" href=""><h4>Error fetching repos</h4></a>';
    	colElement.innerHTML += '<p>Could not fetch description</p>';
    	projectsList.appendChild(colElement);
	} else {
	    for (var i = 0; i < 5; i++) {
	    	var colElement = document.createElement('div');
	    	colElement.classList.add('list-group-item')
	    	var repoName = repoInfo[i].name;
	    	repoName = repoName ? repoName.split("-").join(" ") : 'Error fetching repo';
	    	colElement.innerHTML = '<a target="_blank" href="' + repoInfo[i].html_url + '"><h4>' + repoName + '</h4></a>';
	    	if (repoInfo[i].description !== null) {
				colElement.innerHTML += '<p>' + repoInfo[i].description + '</p>';
	    	} else {
				colElement.innerHTML += '<p>Still awaiting description...</p>';
	    	}
	    	projectsList.appendChild(colElement);
	    }
	}
}