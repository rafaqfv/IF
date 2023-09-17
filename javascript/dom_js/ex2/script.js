/*
    <h1>Lista de Itens</h1>
    
    <button id="destacarItens">Destacar Itens</button>
    <button id="removerDestaque">Remover Destaque</button>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
*/

const btDestacar = document.querySelector('#destacarItens');
const btRemover = document.querySelector('#removerDestaque');
const li = document.querySelectorAll('li');
console.log(li);

function destacar() {
    for (let i = 0; i < li.length; i++) {
        li[i].classList.add('destacado');
    }
}
        
        

function remover() {
    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('destacado');
        li[i].classList.add('outransition');
    }
}

btDestacar.addEventListener('click', destacar);
btRemover.addEventListener('click', remover);