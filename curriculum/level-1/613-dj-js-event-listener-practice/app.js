var square = document.getElementById("square")

square.addEventListener("mouseover", function changeColor(){
    square.style.backgroundColor = "blue"
})

square.addEventListener("mousedown", function changeColor(){
    square.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function changeColor(){
    square.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function changeColor(){
    square.style.backgroundColor = "green"
})

document.addEventListener("wheel", function changeColor(){
    square.style.backgroundColor = "orange"
})

document.addEventListener("keydown", keyboard)
function keyboard(event){
    console.log(event.key)
    if(event.key === "g"){
        square.style.backgroundColor = "green"
    } else if(event.key === "b"){
        square.style.backgroundColor = "blue" 

    } else if(event.key === "r"){
        square.style.backgroundColor = "red"
    } else if(event.key === "y"){
        square.style.backgroundColor = "yellow"
    } else if(event.key === "o"){
        square.style.backgroundColor = "orange"
        } 
}
