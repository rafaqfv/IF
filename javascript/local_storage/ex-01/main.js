const ul = document.querySelector("#test");
const inputText = document.querySelector("#inText");
const btn = document.querySelector("#btn");
const clear = document.querySelector('#clear');

// Verifique se há itens armazenados no localStorage quando a página é carregada
window.addEventListener("load", () => {
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];
  storedItems.forEach(item => {
    const li = document.createElement("li");
    const del = document.createElement('button');
    del.textContent = 'Remove';
    li.textContent = item;
    li.appendChild(del);
    ul.appendChild(li);

    del.addEventListener('click', () => {
      // Remove o item do localStorage
      const itemToRemove = li.textContent.trim(); // Remove espaços em branco do texto
      const updatedItems = storedItems.filter(item => item.trim() !== itemToRemove);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      
      // Remove o item da lista
      ul.removeChild(li);
    });
  });
});

btn.addEventListener("click", btnAdd);
inputText.addEventListener("keyup", enter);
clear.addEventListener('click', () => {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});

function btnAdd() {
  const value = inputText.value;
  if (value.trim() != "") {
    const li = document.createElement("li");
    const del = document.createElement('button');
    del.textContent = 'Remove';
    li.textContent = value;
    li.appendChild(del);
    ul.appendChild(li);

    // Armazene o valor no localStorage
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    storedItems.push(value);
    localStorage.setItem("items", JSON.stringify(storedItems));

    // Limpe o campo de entrada após adicionar o item
    inputText.value = "";
    inputText.focus();

    del.addEventListener('click', () => {
      // Remove o item do localStorage
      const itemToRemove = li.textContent;
      const updatedItems = storedItems.filter(item => item !== itemToRemove);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      
      // Remove o item da lista
      ul.removeChild(li);
    });

  }
}

function enter(e) {
  if (e.key === 'Enter') {
    btnAdd();
  }
}
