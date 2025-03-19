const inputBox = document.querySelector("#input-box"); 
const listContainer = document.getElementById("list-container"); 
const button = document.querySelector("button"); 



button.addEventListener("click", (e) => {
    if (inputBox.value === '') {
        e.preventDefault(); 
    }

    if (inputBox.value) {
        const li = document.createElement("li"); 
        li.textContent = inputBox.value; 
        listContainer.appendChild(li); 
        inputBox.value = ''; 
    }
})

inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const li = document.createElement("li"); 
        li.textContent = inputBox.value; 
        listContainer.appendChild(li); 
        inputBox.value = ''; 
    }
})

listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked"); 
    }
})






