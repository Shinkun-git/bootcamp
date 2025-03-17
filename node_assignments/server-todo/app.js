console.log("app.js is loaded!");
//function to get data from local storage
const getData = (item = null) =>{
    let data = JSON.parse(localStorage.getItem('mytodo'));
    return data ? data : [];
}

//function to set data in local storage
const setData = (item) => {
    let data = getData();
    if(data.includes(item))
        alert("Item already added in todo");
    else{
        data.push(item);
        data = JSON.stringify(data);
        localStorage.setItem('mytodo',data);
    }
}

//function to remove from list
let removeData = (itemId) => {
    let data = getData();
    if(data){
        let newData = data.filter((val, idx)=>{return idx != itemId});
        newData = JSON.stringify(newData);
        localStorage.setItem('mytodo',newData);
        listTodo();
    } else {
        alert("No data found!");
    }
}


//function to render list
let listTodo = () =>{
    let data = getData();
    let html = '';
    if(data){
        html += '<ol>';
        data.forEach((value, idx) =>{
            html += `<li> ${value} &nbsp;&nbsp;&nbsp; <button onclick="removeData(${idx})">Remove</button></li>`
        });
        html += '</ol>';
    }else{
        html = "<p>No to-dos yet! </p>";
    }
    const toDoSection = document.querySelector("#to-do-list")
    toDoSection.innerHTML = html;
}

//function to add to list
const addToDo = ()=>{
    console.log("Add button clicked!"); 
    const newToDo = document.querySelector('#new-to-do').value.trim();
    if(newToDo !== ''){
        setData(newToDo);
        document.querySelector("#new-to-do").value = "";
        listTodo();
    }else{
        alert("Enter a to-do item.")
    }
}

//load the list on page load
document.addEventListener("DOMContentLoaded", listTodo);