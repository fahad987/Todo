// function tellTime() {
//
//
//     var now = new Date();
//     var theMin = now.getHours();
//     var theMan = now.getDay();
//     var theMen = now.getFullYear();
//     var theMas = now.getMilliseconds();
//     var theMis = now.getSeconds();
//     var theHr = now.getMinutes();
//     alert("Current time :" + theHr + ":" + theMin + ":" + theMan + ":" + theMen);
// }
//
// tellTime();
//
// var theSum;
// addNumber();
// function addNumber() {
//       theSum = 9+ 2;
// }
// alert(theSum);

function todoList() {
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newitem = document.createElement("li");
    newitem.appendChild(text);
    document.getElementById("todoList").appendChild(newitem)
}

//
// function AddNewItem(list) {
//
//     var listItem = document.createElement("li");
//     listItem.innerText = "Hello";
//
//     var list = document.getElementById("todolist");
//     list.appendChild(listItem)
// }
//
// var btnNew = document.getElementById("btnAdd");
// btnNew.onclick = AddNewItem;