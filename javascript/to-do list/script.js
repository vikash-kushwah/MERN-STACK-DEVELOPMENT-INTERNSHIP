document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Create the new task
        const taskText = todoInput.value;
        const todoItem = document.createElement("li");
        todoItem.textContent = taskText;

        // Create the complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete Button";
        completeButton.classList.add("complete");
        completeButton.addEventListener("click", function () {
            todoItem.classList.toggle("completed");
        });

        // Create the delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Button";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
            todoItem.remove();
        });

        // Append buttons to the task
        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);

        // Add the task to the list
        todoList.appendChild(todoItem);

        // Clear the input
        todoInput.value = "";
    });
});
