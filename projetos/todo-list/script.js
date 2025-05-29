let tasks = JSON.perse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateCounter() {
    document.getElementById('counter').textContent = tasks.length;
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('chage', () => {
            tasks[index].completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.completed) span.classList.add('completed');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.onclick = () => {
            const newText = prompt('Edite a tarefa:', task.text);
            if (newText) {
                tasks[index].text = newText.trim();
                saveTasks();
                renderTasks();
            }
        };

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        };

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(removeBtn);

        taskList.appendChild(li);

    });

    updateCounter();
}

function addTask() {
    const input = document.getElementById('new-input');
    const text = input.value.trim();

    if (text !== '') {
        tasks.push({ text, completed: false });
        saveTasks();
        renderTasks();
        input.value = '';
    }
}

renderTasks();