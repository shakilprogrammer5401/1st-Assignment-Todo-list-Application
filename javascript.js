


const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');



const addTodo = ()=>{
    const inputText = inputBox.value.trim();

    if(inputText.length <= 0){
        alert("you must add todo ");
        return false;
    }

//create li
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);





//creating edit button
const editBtn = document.createElement("button");
editBtn.innerText = "Edit"
editBtn.style.border = "1px solid black"
editBtn.style.padding = "2px 20px"
editBtn.style.backgroundColor = "black"
editBtn.style.color = "white"
editBtn.style.borderRadius = "5px"
li.appendChild(editBtn)


//creating delete button
const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Remove"
deleteBtn.style.border = "1px solid black"
deleteBtn.style.padding = "2px 8px"
deleteBtn.style.backgroundColor = "black"
deleteBtn.style.color = "white"
deleteBtn.style.borderRadius = "5px"
li.appendChild(deleteBtn)










todoList.appendChild(li);
inputBox.value = "";

}

const updateTodo = (e)=>{
if(e.target.innerHTML === "Remove"){
   todoList.removeChild(e.target.parentElement);
}

if(e.target.innerHTML === "Edit"){
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit"
}



}



addBtn.addEventListener("click", addTodo)
todoList.addEventListener("click", updateTodo)
