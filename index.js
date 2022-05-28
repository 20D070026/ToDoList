// for(var i=0){

// }
function taskDone(li) {
  li.style.textDecoration = "line-through";
}




// var taskList = [];

document.querySelector(".addTaskBtn").addEventListener("click", addTask);

function addTask() {
  // var newTask = "the new task obtained from input field & doneBtn & delBtn";
  var item = document.getElementById("userInput").value;
  if (item=="") return
  // taskList.push(newTask);
  // var latestTaskIndex = taskList.length - 1;
  // var item = taskList[latestTaskIndex];

  // let data = taskList;

  let list = document.getElementById("finalTaskList");

  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);


  let btn_dn = document.createElement("button");
  btn_dn.onclick=function (event){
    taskDone(li);

  }
  // btn_dn.classList.add(`doneTask_${latestTaskIndex}`);
  btn_dn.innerText = "Done";
  li.appendChild(btn_dn);

  let btn_dlt = document.createElement("button");
  btn_dlt.onclick = function(event){
    // console.log(list.childNodes);
    list.removeChild(li);
  }
  btn_dlt.innerText = "Delete";
  li.appendChild(btn_dlt);

  // if (latestTaskIndex > 0){
  //   document.querySelector(`button .doneTask_${latestTaskIndex}`).addEventListener("click", taskDone);
  // }



  // document.querySelector("li").classList.add(`doneTask_+ ${latestTaskIndex}`);


  //     !!!!!!!!!!!!!!!!!
  // rough idea
  // add an indexed class to done and delete buttons using last index of tasklist
  // use class to point in querySelector to the done/delete button associated with the task to be operated upon



  ClearFields();

}



function ClearFields() {
  document.getElementById("userInput").value = "";
}
