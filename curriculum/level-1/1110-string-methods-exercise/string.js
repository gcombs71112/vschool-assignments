let name = "gary combs"
let result = upperCaseAndLowerCase(name)
console.log(result)
function upperCaseAndLowerCase(name){
    return name.toUpperCase() + name.toLowerCase();
}


function findMiddleIndex(name){
    return Math.floor(name.length / 2);
}
let middleIndex = findMiddleIndex(name)
console.log(middleIndex)

let firstName = name.slice(2, 4)
console.log(firstName)
function returnFirstHalf(name){
    let middle = findMiddleIndex(name);
    return name.slice(0, middle);
}
let firstHalf = returnFirstHalf(name)
console.log(firstHalf);

function capilizeAndLowercase(name){
    let first = name.charAt(0).toUpperCase();
    let last = name.slice(1).toLowerCase()
    return first + last;
}
let capilize = capilizeAndLowercase(name)
console.log(capilize)