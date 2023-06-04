const Showtrivia = document.querySelector('.container__trivia');
const input = document.querySelector('.formulario__input');
const form = document.querySelector('.formulario');

const fetchNumber = async (numero) => {
   const response = await fetch(`http://numbersapi.com/${numero}`);
 
   if (response.status === 200) {
     const trivia = await response.text();
     return trivia;
   }
 }

const renderTrivia = async (numero) => {
   Showtrivia.innerHTML = 'Buscando trivia...';

   const trivia = await fetchNumber(numero);
   
   if(trivia) {
      Showtrivia.style.display = 'block';
      Showtrivia.innerHTML = trivia;
      input.value = '';
   } else {
      Showtrivia.style.display = 'none';
      Showtrivia.innerHTML = 'Nenhuma trivia encontrada...';
   }
}

form.addEventListener('submit', (event) => {
   event.preventDefault();
   renderTrivia(input.value);
 });
