/*
    <h1>Seletor de Temas</h1>
    
    <button id="temaClaro">Tema Claro</button>
    <button id="temaEscuro">Tema Escuro</button>

    <div id="conteudo">
        <p>Este é um parágrafo.</p>
        <h2>Este é um título secundário.</h2>
    </div>
*/

const btClaro = document.querySelector('#temaClaro');
const btEscuro = document.querySelector('#temaEscuro');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelectorAll('p');
console.log(p);

function paraEscuro() {
    h1.classList.add('white');
    h2.classList.add('white');
    for (let i = 0; i < p.length; i++) {
        p[i].classList.add('white');
    }
    document.body.style.backgroundColor = 'black';
}
        
function reset() {
    h1.classList.remove('white');
    h2.classList.remove('white');
    for (let i = 0; i < p.length; i++) {
        p[i].classList.remove('white');
    }
    document.body.style.backgroundColor = '#FFF';
}

btEscuro.addEventListener('click', paraEscuro);
btClaro.addEventListener('click', reset);
