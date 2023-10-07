const h1 = document.querySelector('h1');
const inputValue = document.querySelector('#inputValue');
const add = document.querySelector('#add');
const btLimpar = document.querySelector('#limpar');
const blockLista = document.querySelector('.convidados');
add.style.backgroundColor = 'green';
btLimpar.style.backgroundColor = 'red';

function addConvidado() {
    const text = inputValue.value.trim();
    if (text != '') {

        add.value = 'Adicionado!';

        // Criando elementos e recebendo
        const li = document.createElement('li');
        const span = document.createElement('span');
        const check = document.createElement('input');
        check.type = 'checkbox';
        const p = document.createElement('p');
        p.textContent = text;
        const bt = document.createElement('button');
        bt.textContent = 'Remover';

        // Manipulando o DOM e AppendChild
        span.appendChild(check);
        span.appendChild(p);
        li.appendChild(span);
        li.appendChild(bt);
        blockLista.appendChild(li);

        // Funções 
        bt.addEventListener('click', () => {
            blockLista.removeChild(li);
        });
        check.addEventListener('change', () => {
            p.classList.toggle('risk');
            li.classList.toggle('risk');
        });

        // Limpando o input e focando nele
        inputValue.value = '';
        inputValue.focus();
    } else {
        h1.textContent = 'Inválido';
    }
}

function limpar() {
    while (blockLista.firstChild) {
        blockLista.removeChild(blockLista.firstChild);
    }
    inputValue.value = '';
    add.value = 'Adicionar';
}
function enter(e) {
    if (e.key === 'Enter') {
        addConvidado();
    }
}

add.addEventListener('click', addConvidado);
btLimpar.addEventListener('click', limpar);
inputValue.addEventListener('keydown', enter)