let content = document.getElementById("latest-updates");
let list = document.createElement('ul');

var length = 0;
if (latest_updates.length > 6) {
	length = 6;
} else {
	length = latest_updates.length;
}

for (let index = 0; index < length; index++) {
	var update = latest_updates[index];

	let listObject = document.createElement('li');

	let text = document.createElement('span');
	text.style.fontSize = '14px';
	text.textContent = update.content + " - ";

	let link = document.createElement('a');
	link.style.fontSize = '14px';
	link.textContent = "Link";
	link.setAttribute('href', update.url);
	link.setAttribute('target', '_blank');

	text.appendChild(link);
	listObject.appendChild(text);
	list.appendChild(listObject);
}

content.appendChild(list);

content = document.getElementById("publications");

length = 0;
if (publications.length > 2) {
	length = 6;
} else {
	length = publications.length;
}

for (let index = 0; index < length; index++) {
	var update = publications[index];

	let row = document.createElement('div');
	row.setAttribute('class', 'row');

	let col = document.createElement('div');
	col.setAttribute('class', 'col-md-12');

	let title = document.createElement('p');
	title.textContent = update.content;

	let date = document.createElement('p');
	date.style.fontSize = '12px';
	date.textContent = update.date;

	let cite = document.createElement('p');
	cite.style.fontSize = '12px';
	cite.style.textAlign = 'justify';
	cite.textContent = update.cite;

	let further = document.createElement('p');
	further.style.fontSize = '12px';
	let linkIcon = document.createElement('i');
	linkIcon.setAttribute('class', 'fas fa-link separater');
	further.appendChild(linkIcon);

	let link = document.createElement('a');
	link.textContent = "Link";
	link.setAttribute('href', update.url);
	link.setAttribute('target', '_blank');
	further.appendChild(link);

	let codeIcon = document.createElement('i');
	codeIcon.setAttribute('class', 'fas fa-code separater');
	further.appendChild(codeIcon);

	let code = document.createElement('a');
	code.textContent = "Source code";
	code.setAttribute('href', update.code);
	code.setAttribute('target', '_blank');
	further.appendChild(code);

	col.appendChild(title);
	col.appendChild(date);
	col.appendChild(cite);
	col.appendChild(further);
	row.appendChild(col);

	content.appendChild(row);
}