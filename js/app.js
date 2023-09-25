// Seleciona o elemento de entrada de texto pelo seu ID.
const taskInput = document.getElementById('taskInput');

// Seleciona a lista de tarefas pelo seu ID.
const taskList = document.getElementById('taskList');

// Esta função é chamada quando o botão "Adicionar" é clicado.
function addTask() {
    // Obtém o texto da tarefa do campo de entrada e remove espaços em branco no início e no final.
    const taskText = taskInput.value.trim();

    // Verifica se o texto da tarefa não está vazio.
    if (taskText !== '') {
        // Cria um novo elemento de lista (<li>) para representar a tarefa.
        const taskItem = document.createElement('li');
        
        // Cria um elemento de checkbox para marcar a tarefa como concluída.
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        // Adiciona um ouvinte de evento para detectar quando a caixa de seleção é alterada.
        checkBox.addEventListener('change', function () {
            // Se a caixa de seleção estiver marcada, adiciona a classe "completed" para aplicar uma linha no texto.
            if (checkBox.checked) {
                taskItem.classList.add('completed');
            } else {
                // Se a caixa de seleção não estiver marcada, remove a classe "completed" para remover a linha no texto.
                taskItem.classList.remove('completed');
            }
        });

        // Adiciona a caixa de seleção e o texto da tarefa ao elemento de lista.
        taskItem.appendChild(checkBox);
        taskItem.appendChild(document.createTextNode(taskText));

        // Cria um botão para remover a tarefa.
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';

        // Adiciona um ouvinte de evento ao botão de remoção para remover a tarefa quando clicado.
        removeButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

        // Adiciona o botão de remoção ao elemento de lista.
        taskItem.appendChild(removeButton);

        // Adiciona o elemento de lista com a tarefa à lista de tarefas.
        taskList.appendChild(taskItem);

        // Limpa o campo de entrada após adicionar a tarefa.
        taskInput.value = '';
    }
}

// Adiciona um ouvinte de evento para a tecla "Enter" no campo de entrada para adicionar tarefas quando pressionada.
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
