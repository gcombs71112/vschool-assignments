// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(var i = 10; i >= 0; i--){
//     console.log(i)
// }


// const fruit = ["banana", "orange", "apple", "kiwi"]

// for(var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }


// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const numbersarr = [];

// for(var i = 0; i < numbers.length; i++){
//     numbersarr.push(numbers[i]);
// }
// console.log(numbers)

// for(var i = 0; i < 100; i++){
//     if([i] % 2 === 0){
//         console.log([i])
//     }
// }


const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var other = [];

for(var i = 0; i < fruit.length; i += 2){
    other.push(fruit[i])

}
console.log(other)