const readline = require("readline-sync");
let greetPlayer =
  "Hello, welcome to Colossal Adventure. Get ready this is going to be the adventure of a lifetime";
console.log(greetPlayer);
const userName = readline.question("What is your name? ");
console.log("Welcome " + userName + " to the RPG game!");

class Character {
  constructor(name, healthPoints, attackPoints, inventory) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.inventory = inventory;
  }

  printInventory() {
    console.log(`Inventory: ${this.inventory}`);
  }
}
function fight(currentEnemy) {
  console.log(`you chose to fight ${currentEnemy.name}`);
  while (hero.healthPoints > 0 && currentEnemy.healthPoints > 0) {
    currentEnemy.healthPoints -= hero.attackPoints;
    console.log(
      `${hero.name} attacked ${currentEnemy.name} damage applied ${hero.attackPoints} ${currentEnemy.name} health points now at ${currentEnemy.healthPoints}`
    );
    hero.healthPoints -= currentEnemy.attackPoints;
    console.log(
      `${currentEnemy.name} attacked ${hero.name} damage applied ${currentEnemy.attackPoints} ${hero.name} health points now at ${hero.healthPoints}`
    );
    if (hero.healthPoints <= 0) {
      console.log(`Better Luck next time you died`);
      isGameRunning = false;
    }
    if (currentEnemy.healthPoints <= 0) {
      console.log(`You won ${currentEnemy.name} is dead`);
      console.log(`${hero.name} has been awarded ${currentEnemy.inventory} and 50 HP`)
      enemies = enemies.filter((item) => item.name !== currentEnemy.name);
    }
  }
}

function run(currentEnemy) {
  console.log(`you chose to run from ${currentEnemy.name}`);
  let escapeChance = getRandomeNumber(1, 2);
  if (escapeChance === 1) {
    console.log(`${hero.name} has escaped`);
  } else if (escapeChance === 2) {
    console.log(`${currentEnemy.name} has killed ${hero.name}`);
  }
}

let playerInventory = ["bow", "sword", "axe", "rocket launcher"];

const hero = new Character(userName, 100, 5, playerInventory);
const enemy1 = new Character("Deebo", 44, 3, ["tooth", "bracelet"]);
const enemy2 = new Character("Shonuff", 55, 3, ["Sword", "Necklace"]);
const enemy3 = new Character("Zod", 22, 7, ["laser eyes"]);

let enemies = [enemy1, enemy2, enemy3];

const getRandomeNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isGameRunning = true;

while (isGameRunning) {
  if (enemies.length === 0) {
    console.log(`${hero.name} has defeated all enemies`);
    process.exit();
  }

  let action = readline.question(
    "What do you want to do? Press [w] to walk, [i] to see your inventory, or [q] to quit: ",
    { limit: ["w", "i", "q"] }
  );
  if (action === "w") {
    console.log("You chose to walk");

    let enemyEncounter = getRandomeNumber(1, 4);
    console.log(enemyEncounter);

    if (enemyEncounter === 1) {
      let randomEnemy = getRandomeNumber(0, enemies.length - 1);
      let currentEnemy = enemies[randomEnemy];
      console.log(`${currentEnemy.name} has appeared`);
      console.log(currentEnemy);
      const options = ["fight", "run"];
      let fightOrRun = readline.keyInSelect(
        options,
        "do you want to fight or run? "
      );
      console.log(options[fightOrRun]);
      if (options[fightOrRun] === "fight") {
        fight(currentEnemy);
      } else if (options[fightOrRun] === "run") {
        run(currentEnemy);
      }
    }
  } else if (action === "i") {
    hero.printInventory();
  } else if (action === "q") {
    console.log("You chose to quit");
    isGameRunning = false;
  }
}
