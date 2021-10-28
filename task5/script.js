
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const duplicateField= document.querySelector('#duplicateField');

input.addEventListener('input', function(event) {
    duplicateField.textContent = event.target.value;
});

button.addEventListener('click', function(event) {
    duplicateField.textContent = "";
    console.log (input.value); 
    input.textContent = "";
});

