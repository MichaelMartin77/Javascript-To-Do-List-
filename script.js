const inputBox = document.querySelector("#input-box"); 
const listContainer = document.getElementById("list-container"); 
const button = document.querySelector("button"); 


// add an click event to the button so when a user enters a list item in the input it creates the list item
// and appends it to the list-container
button.addEventListener("click", (e) => {
    if (inputBox.value.trim() === '') {
        return;
    }
        const li = document.createElement("li"); 
        li.textContent = inputBox.value; 
        listContainer.appendChild(li); 
        const span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; 
        li.appendChild(span); 
        saveTask();
        inputBox.value = ''; 
        
})

// add keydown event so when a user clicks the "enter" key it creates the list item 
inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const li = document.createElement("li"); 
        li.textContent = inputBox.value; 
        listContainer.appendChild(li); 
        const span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; 
        li.appendChild(span); 
        saveTask();
        inputBox.value = ''; 
    }
})

// add "checked" class if the target element is a list item 
listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked"); 
        saveTask();
    }
})

listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
        const parent = event.target.parentElement; 
        parent.remove(); 
        saveTask();
    }
})

function saveTask() {
    const tasks = []; 
    const listItems = listContainer.children; 

    for (const item of listItems) {
        let taskText = item.firstChild.nodeValue.trim(); 
        let isCompleted = item.classList.contains("checked"); 

        let taskObj = {
            text: taskText, 
            completed: isCompleted
        }; 
        tasks.push(taskObj); 
    }

    localStorage.setItem("tasks", JSON.stringify(tasks)); 
}


function loadTasks() {
    const savedTask = JSON.parse(localStorage.getItem("tasks")) || [];

    for (const taskedSave of savedTask) {
        const li = document.createElement("li"); 
        li.textContent = taskedSave.text; 
        if (taskedSave.completed === true) {
            li.classList.toggle("checked"); 
        }
        listContainer.appendChild(li); 
        const span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    
}
loadTasks(); 


