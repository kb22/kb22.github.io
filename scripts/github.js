fetch('https://api.github.com/users/kb22/repos?sort=pushed')
.then(response => {
	if (!response.ok) {
       return Promise.reject('Could not fetch repos information from GitHub');
    }
    return response.json();
}).then(text => {
	plotMultiColRepos(text);
}).catch(error => {
	console.log(error);
});

function plotMultiColRepos(text) {
	let content = document.getElementsByClassName("feature-content")[0];
	let count = 0;
	const rowsCount = (text.length)%3;
	for (let j = 0; j < 10; j++) {
		let row = document.createElement('div');
		row.setAttribute('class', 'row');
		row.style.marginTop = '20px';

		for (let i = count; i < count + 3; i++) {
			let col = document.createElement('div');
			col.setAttribute('class', 'col-md-4');

			let image = document.createElement('img');
			image.setAttribute('src', 
				'https://images.unsplash.com/photo-1560620564-850829217d97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixlib=rb-1.2.1&q=80&w=280');
			
			let heading = document.createElement('h5');
			heading.textContent = text[i].name;

			let description = document.createElement('p');
			description.textContent = text[i].description;

			let link = document.createElement('a');
			link.setAttribute('href', text[i].html_url);
			link.setAttribute('role', 'button');
			link.setAttribute('target', '_blank');
			link.setAttribute('class', 'btn btn-outline-dark theme-btn');
			link.textContent = "Project "

			let icon = document.createElement('i');
			icon.setAttribute('class', 'fa fa-github social');

			link.appendChild(icon);
			col.appendChild(image);
			col.appendChild(heading);
			col.appendChild(description);
			col.appendChild(link);
			row.appendChild(col);
		}

		content.appendChild(row);
		count +=  4;
	}
}