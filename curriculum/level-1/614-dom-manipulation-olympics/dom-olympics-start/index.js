var headerText = document.getElementById("header");
headerText.textContent = "Javascript Wrote This!!";
headerText.classList.add("header");
var headerElement = document.createElement("h1");

headerElement.textContent = "Gary Combs wrote this javascript";
headerElement.style.fontSize = "small";
document.getElementById("header").appendChild(headerElement);
headerElement.id = "h1";
headerElement.innerHTML =
  '<span style="color: blue;">Gary Combs</span> wrote this javascript';
var main = document.getElementById("main");
console.log(main)
var messages = document.getElementsByClassName("messages")[0];
console.log(messages)
var messageLeft0 = document.getElementsByClassName("message left")[0];

var messages = document.getElementsByClassName("message left")[1];
var messageLeft1 = document.getElementsByClassName("message left")[1];
messageLeft1.textContent = "Tell me an awesome police story"
console.log(messageLeft1)
messageLeft0.textContent = "I have something fun to talk about";
var messages = document.getElementsByClassName("message right")[0];
var messageRight0 = document.getElementsByClassName("message right")[0];
messageRight0.textContent = "I would love to talk";
var messages = document.getElementsByClassName("message right")[1];
var messageRight1 = document.getElementsByClassName("message right")[1];
messageRight1.textContent = "Oh hold on to your seat I have a great story for you that you won't believe";

var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", reset)
function reset(){
  messageRight1.innerHTML = '';
  messageRight0.innerHTML = '';
  messageLeft0.innerHTML = '';
  messageLeft1.innerHTML = '';
}
