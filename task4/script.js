const link = document.querySelector('#link');


link.addEventListener('click', function(event) {
    event.preventDefault();
    let text = prompt('Введите текст')
    this.textContent = text;
   });



 
