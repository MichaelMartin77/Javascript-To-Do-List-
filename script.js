const addButton = document.querySelector(".add"); 
const form = document.querySelector("#todo-form"); 
const input = document.querySelector("#text"); 
const todoList = document.querySelector(".todo-list"); 

form.addEventListener("submit", (event) => {
    // prevents the page from reloading after user enters todo item
    event.preventDefault(); 

    // get the value of submitted in the form & check if it's empty or not to ensure user can't submit none speicified items
    const taskText = input.value.trim(); 
    if (!taskText) return; 


    // create and append li tag with submitted to-do list item 
    const listItem = document.createElement("li"); 
    const deleteButton = document.createElement("button"); 
    deleteButton.textContent = "Delete"; 
    listItem.textContent = taskText; 

    listItem.appendChild(deleteButton); 
    todoList.appendChild(listItem); 
    

    // set input value back to an empty string after user submits 
    input.value = ""; 
}) 

todoList.addEventListener('click', (event) => {
    
    if(event.target.tagName === "BUTTON") {
        event.target.parentElement.remove(); 
    }

    if (event.target.tagName === "LI") {
        event.target.classList.toggle("complete"); 
    }

})



