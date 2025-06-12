function addTask(){
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;

    var listItem = document.createElement('li');
    listItem.textContent=taskText;

    listItem.addEventListener('click',function(){
        listItem.classList.toggle('completed');
    });

    var taskList = document.getElementById('taskList');
    taskList.appendChild(listItem);

    taskInput.value=" ";
}