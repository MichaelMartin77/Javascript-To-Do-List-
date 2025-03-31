const inputBox = document.querySelector("#input-box"); 
const listContainer = document.getElementById("list-container"); 
const button = document.querySelector("button"); 
const span = document.querySelector("span"); 


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
        inputBox.value = ''; 
    }
})

// add "checked" class if the target element is a list item 
listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked"); 
    }
})

listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
        const parent = event.target.parentElement; 
        parent.remove(); 
    }
})


span.addEventListener("click", () => {
    console.log("You've been clicked");
})




