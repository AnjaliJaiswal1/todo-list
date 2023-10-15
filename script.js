const newItem = document.querySelector(".add-list");
const button = document.querySelector(".add-button");
const lists = document.querySelector("#todo-lists");

function addNewList() {
    if (newItem.value === '') {
        console.log("ene value")
        alert("Please enter value");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = newItem.value;
        lists.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    newItem.value = null;
    saveData();
}

button.addEventListener('click', () => addNewList());
lists.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', lists.innerHTML);
}
function showTaskList() {
    lists.innerHTML = localStorage.getItem  ("data");
}
showTaskList();