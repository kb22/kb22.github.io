Promise.all([userRequest, repoRequest, mediumRequest]).then(function(values) {
	
	const userInfo = JSON.parse(values[0]);
	const repoInfo = JSON.parse(values[1]);
	const mediumInfo = JSON.parse(values[2].split('</x>')[1]);

    var projectsCount = document.getElementById('projects-count');
    projectsCount.innerHTML = "I have worked on " + userInfo.public_repos + " projects.";
    var profileImage = document.getElementById('profile-image');
    var imageElement = document.createElement('img');
	imageElement.style.borderRadius = "50%";
    imageElement.src = userInfo.avatar_url;
    profileImage.appendChild(imageElement);

    var projectsList = document.getElementById('projects-list');

    for (var i = 0; i < 5; i++) {
    	var colElement = document.createElement('div');
    	colElement.classList.add('list-group-item')
    	var repoName = repoInfo[i].name;
    	repoName = repoName.split("-").join(" ");
    	colElement.innerHTML = '<a target="_blank" href="' + repoInfo[i].html_url + '"><h4>' + repoName + '</h4></a>';
    	if (repoInfo[i].description !== null) {
			colElement.innerHTML += '<p>' + repoInfo[i].description + '</p>';
    	} else {
			colElement.innerHTML += '<p>Still awaiting description...</p>';
    	}
    	projectsList.appendChild(colElement);
    }

    console.log(mediumInfo);
	document.getElementById('loader').style.display="none";
    document.getElementById('content').style.display="block";
})