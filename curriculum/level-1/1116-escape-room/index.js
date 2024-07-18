const readline = require("readline-sync");

let hasKey = false;
let isAlive = true;

const choiceArr = ["1. Find the key", " 2. Open the door", " 3. Put hand in the hole"];
while(isAlive){
    let choice = readline.question(`Choose from the following options: ( ${[...choiceArr]}) `);

    if(choice === '1'){
        console.log('You found the key');
        hasKey = true;
         choiceArr.shift();
        

    }else if (choice === '2'){
        if(hasKey){
            console.log('You escaped');
            console.log('You won congratulations!!!!');

            return isAlive = false;
        }else{
            console.log('The door is locked you need to find the key');
        }

    }else if(choice === '3'){
        console.log('Put your hand in the hole and die');
        console.log('Game over. You suck');

        return isAlive = false;
    }else{
        console.log('Invalid choice try again');
    }
    
    
}


