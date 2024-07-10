const todoList = document.getElementById("todolist");
const TodoInput = document.getElementById("Input");
const TodoBtn = document.getElementById("Btn");

TodoBtn.addEventListener("click",()=>{
    const TodoText = TodoInput.value;
    if(TodoText!=""){
        const TODOItem = document.createElement("li");
        TODOItem.innerText = TodoText;

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "x";
        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click",function(){
            TODOItem.remove();
        });
        TODOItem.appendChild(deleteTodoBtn);
        todoList.appendChild(TODOItem);
        TodoInput.value = "";
    }
});