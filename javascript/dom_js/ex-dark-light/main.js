{/* <div class="fundo">
<div class="botao">

</div>
</div> */}

const fundo = document.querySelector('.fundo');
const botao = document.querySelector('.botao');
const body = document.querySelector('body');

fundo.addEventListener('click', () => {
   fundo.classList.toggle('toggle'); 
   body.classList.toggle('toggle'); 
});