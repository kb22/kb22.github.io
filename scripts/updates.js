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
	let text = document.createElement('a');
	text.style.fontSize = '14px';
	text.textContent = update.content;
	text.setAttribute('href', update.url);
	text.setAttribute('target', '_blank');

	listObject.appendChild(text);
	list.appendChild(listObject);
}

content.appendChild(list);