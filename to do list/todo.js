const searchbox = document.getElementById('id6');
const todocontainer = document.getElementById('id2');
const button = document.getElementById('id7');

function addTask() {
    const taskText = searchbox.value.trim();
    if (taskText !== "") {
        const newTask = document.createElement('li');
        newTask.className = 'class3';
        newTask.textContent = taskText;
        todocontainer.appendChild(newTask);
        searchbox.value = "";
    }
}

button.addEventListener('click', addTask);