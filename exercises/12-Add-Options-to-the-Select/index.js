let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
let addString = ''
let index = 0; 
let selector = document.querySelector('#mySelect');
// Your code here
for (let country of countries){
    let newCountry = document.createElement('option');
    newCountry.value = country;
    newCountry.innerHTML =country;
    index+=1;
    selector.appendChild(newCountry);
}

selector.addEventListener('change', function(){
    let selection = selector.value;
    alert(selection);
})