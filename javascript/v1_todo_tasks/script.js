/* <h1>To Do Tasks</h1>
<div id="app">
    <input type="text" id="taskInput" placeholder="Adicione uma tarefa">
    <button id="addTask">Adicionar Tarefa</button>
    <ul id="taskList">
        <!-- As tarefas serão adicionadas aqui dinamicamente -->
    </ul>
</div> */

const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTask');
const taskList = document.querySelector('#taskList');

function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeButtonColor() {
    addTaskButton.style.backgroundColor = getRandomHexColor();
}

function addCheckBox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    return checkbox;
}

let checkbox;

function tasks() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTaskButton.style.background = getRandomHexColor();
        addTaskButton.textContent = 'Tarefa Adicionada';
        const li = document.createElement("li");

        checkbox = addCheckBox();
        li.appendChild(checkbox);

        const span = document.createElement("span");
        span.textContent = taskText;
        taskList.appendChild(li);
        li.appendChild(span);
        taskInput.value('');
    } else {

        alert('bomb has been planted');

    }
}


let tecla = null;

    function enter(enter) {
        tecla = enter.key;

        if (tecla === 'Enter') {
            tasks();
        }
        
    }


addTaskButton.addEventListener("click", tasks);
taskInput.addEventListener('keydown', enter);

