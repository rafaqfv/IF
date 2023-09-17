// Obtenha botões e alvos por ID
var botaoPorTag = document.getElementById("alterarPorTag");
var botaoPorId = document.getElementById("alterarPorId");
var botaoPorClasse = document.getElementById("alterarPorClasse");

var alvoPorTag = document.querySelector("p");
var alvoPorId = document.getElementById("elementoPorId");
var alvosPorClasse = document.getElementsByClassName("elementoPorClasse");

// Adicione eventos de clique aos botões
botaoPorTag.addEventListener("click", alterarPorTag);
botaoPorId.addEventListener("click", alterarPorId);
botaoPorClasse.addEventListener("click", alterarPorClasse);

// Função para alterar o texto por tag
function alterarPorTag() {
    alvoPorTag.textContent = "Texto alterado por tag!";
}

// Função para alterar o texto por ID
function alterarPorId() {
    alvoPorId.textContent = "Texto alterado por ID!";
}

// Função para alterar o texto por classe
function alterarPorClasse() {
    for (var i = 0; i < alvosPorClasse.length; i++) {
        alvosPorClasse[i].textContent = "Texto alterado por classe!";
    }
}

