function changeTextContent(heading, newText) {

  
    heading.textContent = newText
  
}
let heading = document.getElementById("heading")
changeTextContent(heading, "This is finally working. Yaaaay!!!!!");





let paragraph = document.getElementById("paragraph")

let changButton = document.getElementById("changeButton")
changButton.addEventListener("submit", function(event){
    event.preventDefault();

})

changButton.addEventListener("click", function(){

    changeTextContent(paragraph, "Come on baby work for me")
})

    


