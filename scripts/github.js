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
			image.setAttribute('src', 
				'https://images.unsplash.com/photo-1562369865-0a516793ce29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=240&ixlib=rb-1.2.1&q=80&w=240');

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
			codeLink.textContent = "View Source Code";
			links.append(codeLink);
			let dot = document.createElement('i');
			dot.setAttribute('class', 'fa fa-circle-thin separator');
			links.appendChild(dot);
			let readme = document.createElement('a');
			readme.setAttribute('href', text[i].html_url + '/blob/master/README.md');
			readme.setAttribute('target', '_blank');
			readme.textContent = "Readme";
			links.append(readme);

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