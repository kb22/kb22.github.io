fetch('https://api.github.com/users/kb22/repos?sort=pushed')
.then(response => {
	if (!response.ok) {
       return Promise.reject('Could not fetch repos information from GitHub');
    }
    return response.json();
}).then(text => {
	singleColRepo(text);
}).catch(error => {
	console.log(error);
});

function singleColRepo(text) {
	let content = document.getElementsByClassName("feature-content")[0];
	let count = 0;
	for (let j = 0; j < 15; j++) {
		let row = document.createElement('div');
		row.setAttribute('class', 'row');
		for (let i = count; i < count + 2; i++) {
			row.style.marginTop = '20px';
			row.style.marginBottom = '20px';

			let col1 = document.createElement('div');
			col1.setAttribute('class', 'col-md-2');

			let image = document.createElement('img');
			image.setAttribute('src', 'images/project-image-' + i%5 + '.jpg');

			let col2 = document.createElement('div');
			col2.setAttribute('class', 'col-md-4');

			let heading = document.createElement('h6');
			heading.textContent = (text[i].name.split('-')).join(' ');

			let description = document.createElement('p');
			description.textContent = text[i].description;

			let info = document.createElement('p');
			let starIcon = document.createElement('i');
			starIcon.setAttribute('class', 'fa fa-star info-icon');
			info.appendChild(starIcon);
			let starCount = document.createElement('span');
			starCount.textContent = text[i].stargazers_count;
			info.appendChild(starCount);
			let forkIcon = document.createElement('i');
			forkIcon.setAttribute('class', 'fa fa-code-fork info-icon');
			info.appendChild(forkIcon);
			let forkCount = document.createElement('span');
			forkCount.textContent = text[i].forks;
			info.appendChild(forkCount);

			let links = document.createElement('p');
			let codeLink = document.createElement('a');
			codeLink.setAttribute('href', text[i].html_url);
			codeLink.setAttribute('target', '_blank');
			codeLink.textContent = "Source Code";
			links.append(codeLink);
			let dot = document.createElement('i');
			dot.setAttribute('class', 'fa fa-circle-thin separator');
			links.appendChild(dot);
			let readme = document.createElement('a');
			readme.setAttribute('href', text[i].html_url + '/blob/master/README.md');
			readme.setAttribute('target', '_blank');
			readme.textContent = "Readme";
			links.append(readme);

			if (text[i].homepage != null) {
				dot = document.createElement('i');
				dot.setAttribute('class', 'fa fa-circle-thin separator');
				links.appendChild(dot);
				let article = document.createElement('a');
				article.setAttribute('href', text[i].homepage);
				article.setAttribute('target', '_blank');
				article.textContent = "Article";
				links.append(article);
			}

			col1.appendChild(image);
			col2.appendChild(heading);
			col2.appendChild(description);
			col2.appendChild(info);
			col2.appendChild(links);
			row.appendChild(col1);
			row.appendChild(col2);
		}
		content.appendChild(row);
		count += 2;
	}
}