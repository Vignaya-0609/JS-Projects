const inputText=document.getElementById("todo-text");
const addBtn=document.getElementById("add-todo");
const list =document.getElementById("list");
console.log(list)
let id=3;
function deleteTodo(id){
    let deleteItem=document.getElementById(id);
    deleteItem.parentNode.remove();
    console.log("deleted successfully")
}

function addTodo(e){
    e.preventDefault();
    if(inputText.value!=="" || inputText.value.trim()!==""){
        let newInput= document.createElement("li");
        newInput.innerHTML=`<p>${inputText.value}</p>
                            <p onclick="deleteTodo('${id}')" id=${id}>x</p>`
        list.append(newInput)
        id++;
    }
    inputText.value="";

}
addBtn.addEventListener("click",addTodo);