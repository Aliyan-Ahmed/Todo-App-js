var list = document.getElementById("list");



function addTodo(){
    // getting the value of input
    var todo_item = document.getElementById("todo-item");
   //li Tag create kara hai javascript sy
    var li = document.createElement('li');
     //li k liye Text be lay ga dynamically
     var liText = document.createTextNode(todo_item.value);
     li.appendChild(liText);
    
     //create delete button
     var delbtn = document.createElement("button");
      var deltext = document.createTextNode("Delete");
      delbtn.setAttribute("class","btndelete");
      delbtn.setAttribute("onclick","deleteItem(this)");
      delbtn.appendChild(deltext);
      li.appendChild(delbtn);

       //create Edit button
       var editbtn = document.createElement("button");
       var edittext = document.createTextNode("Edit");
       editbtn.appendChild(edittext);
       li.appendChild(editbtn);
       editbtn.setAttribute("class","btnedit");
       editbtn.setAttribute("onclick","editItem(this)");
   
    //list mein nazar aye text
     list.appendChild(li);
     //Empty input value when user click additem button
     todo_item.value = "";

     
}  //li parentnode hai delbtn ka
function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt ("Enter your value",val);
    e.parentNode.firstChild.nodeValue = editvalue;

}


function deleteAll(){
    list.innerHTML = "";
}