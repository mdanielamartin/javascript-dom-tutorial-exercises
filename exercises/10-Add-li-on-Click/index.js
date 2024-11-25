let button = document.getElementById("superDuperButton");
let list = document.getElementById('myList');


button.addEventListener("click", function() {
	let bullet = document.createElement('li');
	bullet.innerHTML = 'Fourth Element';
	list.appendChild(bullet);

});
