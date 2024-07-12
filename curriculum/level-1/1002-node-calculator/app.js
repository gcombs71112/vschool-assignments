const readline = require("readline");

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Prompt user for input
rl.question("Please enter your first number: ", (firstNum) => {
  rl.question("Please enter your second number: ", (secondNum) => {
    rl.question(
      "Please enter the operation to perform (add, sub, mul, div): ",
      (operation) => {
        // Convert input strings to numbers
        const num1 = parseFloat(firstNum);
        const num2 = parseFloat(secondNum);
        // Check for valid numbers
        if (isNaN(num1) || isNaN(num2)) {
          console.log("Invalid input. Please enter valid numbers.");
          rl.close();
          return;
        }

        // Perform the selected operation
        let result;
        switch (operation) {
          case "add":
            result = add(num1, num2);
            break;
          case "sub":
            result = sub(num1, num2);
            break;
          case "mul":
            result = mul(num1, num2);
            break;
          case "div":
            result = div(num1, num2);
            break;
          default:
            console.log(
              "Invalid operation. Please enter add, sub, mul, or div."
            );
            rl.close();
            return;
        }
        // Display the result
        console.log(`The result is: ${result}`);
        rl.close();
      }
    );
  });
});
