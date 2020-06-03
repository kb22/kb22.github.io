fetch('https://api.github.com/users/kb22/repos?sort=pushed&per_page=30')
.then(response => {
	if (!response.ok) {
       return Promise.reject('Could not fetch repos information from GitHub');
    }
    return response.json();
}).then(text => {
	showProjects(text);
}).catch(error => {
	console.log(error);
});

function showProjects(text) {
	let content = document.getElementById("recent-projects");
	let row = document.createElement('div');
	row.setAttribute('class', 'row');

	let count  = 0;
	for (let i = 0; i < 5; i++) {

		if ((text[i].name == "kb22.github.io") || (text[i].name == "CSCI_6360_Parallel_K_Means") || (count == 3)) {
			continue;
		} else {
			count++;
		}

		let card = document.createElement('div');
		card.setAttribute('class', 'card');

		let cardBody = document.createElement('div');
		cardBody.setAttribute('class', 'card-body');

		let cardTitle = document.createElement('h6');
		cardTitle.setAttribute('class', 'card-title');
		cardTitle.textContent = (text[i].name.split('-')).join(' ');
		cardTitle.textContent = (cardTitle.textContent.split('_')).join(' ');

		let cardText = document.createElement('p');
		cardText.setAttribute('class', 'card-text');
		cardText.style.fontSize = "12px";
		cardText.style.textAlign = "justify";
		cardText.textContent = text[i].description;


		let githubStats = document.createElement('p');
		githubStats.setAttribute('class', 'card-text');
		githubStats.style.fontSize = "12px";
		let starIcon = document.createElement('i');
		starIcon.setAttribute('class', 'fas fa-star info-icon');
		githubStats.appendChild(starIcon);
		let starCount = document.createElement('span');
		starCount.setAttribute('class', 'info-number');
		starCount.textContent = text[i].stargazers_count;
		githubStats.appendChild(starCount);
		let forkIcon = document.createElement('i');
		forkIcon.setAttribute('class', 'fas fa-code-branch info-icon');
		forkIcon.style.fontSize = "14px";
		githubStats.appendChild(forkIcon);
		let forkCount = document.createElement('span');
		forkCount.setAttribute('class', 'info-number');
		forkCount.textContent = text[i].forks;
		githubStats.appendChild(forkCount);


		let links = document.createElement('p');
		links.setAttribute('class', 'card-text');
		links.style.fontSize = "12px";
		let codeLink = document.createElement('a');
		codeLink.setAttribute('href', text[i].html_url);
		codeLink.setAttribute('target', '_blank');
		codeLink.textContent = "Source Code";
		links.append(codeLink);
		let dot = document.createElement('i');
		dot.setAttribute('class', 'fas fa-circle separater');
		links.appendChild(dot);
		let readme = document.createElement('a');
		readme.setAttribute('href', text[i].html_url + '/blob/master/README.md');
		readme.setAttribute('target', '_blank');
		readme.textContent = "Readme";
		links.append(readme);

		if (text[i].homepage != null && text[i].homepage != "") {
			dot = document.createElement('i');
			dot.setAttribute('class', 'fas fa-circle separater');
			links.appendChild(dot);
			let article = document.createElement('a');
			article.setAttribute('href', text[i].homepage);
			article.setAttribute('target', '_blank');
			article.textContent = "Article";
			links.append(article);
		}

		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardText);
		cardBody.appendChild(githubStats);
		cardBody.appendChild(links);
		card.appendChild(cardBody);
		row.appendChild(card);
	}
	content.appendChild(row);
}