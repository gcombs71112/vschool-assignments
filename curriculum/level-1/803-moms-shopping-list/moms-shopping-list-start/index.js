const form = document.addItem;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = form.input.value;

  let newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  
  const newButton = document.createElement("button");
  newButton.textContent = "edit";

  const newButton2 = document.createElement("button");
  newButton2.textContent = "X";
  
  const newList = document.createElement("li");
 
  newButton.id = "newButton"
  newButton2.id = "newButton2"
  
  function removeNewList(){
    document.getElementById("list");
    newList.removeChild(newDiv);
    newList.removeChild(newButton)
    newList.removeChild(newButton2)
  }
  newButton2.addEventListener("click", removeNewList)

  newDiv.append(input)
 newList.appendChild(newDiv);
 newList.appendChild(newButton);
 newList.appendChild(newButton2);
 document.getElementById("list").appendChild(newList)
 
});
