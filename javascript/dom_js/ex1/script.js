    const tag = document.querySelector('p');
    const id = document.querySelector('#textoPorId');
    const classe = document.querySelector('.elementoPorClasse');
    const hide = document.querySelector('#hide');
    const btHide = document.querySelector('#esconder');
    const btTag = document.querySelector('#alterarPorTag');
    const btId = document.querySelector('#alterarPorId');
    const btClasse = document.querySelector('#alterarPorClasse');

// FUNÇÕES
function porTag() {
    tag.textContent = 'p por tag';
}
function porId() {
    id.textContent = 'p com id';
}
function porClasse() {
    classe.textContent = 'p com classe';
}
function esconder() {
    hide.style.display = 'none';
    tag.textContent = 'Texto foi escondido!';
}

// EVENTOS
btTag.addEventListener('click', porTag);
btId.addEventListener('click', porId);
btClasse.addEventListener('click', porClasse);
btHide.addEventListener('click', esconder);