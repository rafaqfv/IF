
// ! fiz o código e fui organizando depois.

// Seleção de elementos do DOM
const inputText = document.querySelector('#input');
const btnAdd = document.querySelector('#add');
const ulConvidados = document.querySelector('.convidados');
const limpar = document.querySelector('#limpar');

btnAdd.style.backgroundColor = 'green';
limpar.style.backgroundColor = 'red';

// Função para adicionar convidados à lista
function addConvidados() {
    const text = inputText.value.trim(); 
    const regex = /^[A-Za-z\s]+$/;
    if (text !== '' && text.match(regex)) {
        btnAdd.textContent = 'Adicionado!';

        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");
        button.textContent = "remover";
        const checkbox = document.createElement("input");
        const p = document.createElement('p');
        p.textContent = text;
        checkbox.type = "checkbox";
        
        span.appendChild(checkbox);
        span.appendChild(p);
        li.appendChild(span);
        li.appendChild(button);
        ulConvidados.appendChild(li);


        // Adicionando eventos aos botões
        button.addEventListener('click', () => {
            ulConvidados.removeChild(li);
        });

        checkbox.addEventListener('click', () => {
            p.classList.toggle('risk');
        });

        // Limpar o input e focar nele para a próxima entrada
        inputText.value = '';
        inputText.focus();

    } else {
        document.querySelector('h1').innerHTML = 'Inválido';
    }
}

// Função para limpar toda a lista de convidados
function limparAll() {
    while (ulConvidados.firstChild) {
        ulConvidados.removeChild(ulConvidados.firstChild);
    }
    btnAdd.textContent = 'Adicionar';
    inputText.value = '';
}

// Evento de tecla Enter no input
inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addConvidados();
    }
});

// Adicionando eventos aos botões principais
btnAdd.addEventListener('click', addConvidados);
limpar.addEventListener('click', limparAll);