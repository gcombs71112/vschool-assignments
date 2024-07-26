


//make an array
// const array = ["!hello$", "&function^%", "*howd#y"]
// //make a for loop that loops through the array
// function lettersWithStrings(array, char){
//     for (let i = 0; i < array.length; i++){
//         if(array[i].includes(char)){
//             console.log(array[i]);
//         }
// }

// }
// console.log(lettersWithStrings(["!hello$", "&function^%", "*howd#y"],"$"))




// // Test data
// console.log(isDivisible(4, 2));  // => true
// console.log(isDivisible(9, 3));  // => true
// console.log(isDivisible(15, 4)); // => false

// function largest(arr){
//     let max = arr[0];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(largest([6, 13, 250, 3])) // => 250
//     console.log(largest([3, 5, 2, 8, 1])) // => 8
//     console.log(largest([-13, 40, 3, 0, 19, 22]))
function isDivisible(num1, num2) {
    return num1 % num2 === 0;
}
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false