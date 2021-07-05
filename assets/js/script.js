var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
        alert("button clicked");
        var listItemEL = document.createElement("li");
        listItemEL.className = "task-item";
        listItemEL.textContent = "this is a new task.";
        tasksToDoEl.appendChild(listItemEL);
    };

buttonEl.addEventListener("click", createTaskHandler);