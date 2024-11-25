let button = document.getElementById("superDuperButton");
let newElem = document.createElement('div')
newElem.style.background = 'yellow';
newElem.innerHTML = 'Hello World';

button.addEventListener("click", function() {
	// Your code here
	document.body.appendChild(newElem);
	
});
