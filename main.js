import inquirer from "inquirer";
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthIncrease() {
        let health = this.health = 100;
    }
}
//for opponent
class Opponent {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name"
    }
]);
let opponent = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "select opponent to fight with.",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
//console.log(`${opponent.name} v/s${player.name}`)
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "choose the attack type to perform action",
                choices: ["Attack", "Drink portion", "Run for your life"],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(`${p1.name}health is ${p1.health}`);
                console.log(`${o1.name} fuel is${o1.health}`);
                if (p1.health <= 0) {
                    console.log("you loose,better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.healthDecrease();
                console.log(`${p1.name}health is ${p1.health}`);
                console.log(`${o1.name} fuel is${o1.health}`);
                if (o1.health <= 0) {
                    console.log("you win, hurray");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.healthIncrease();
            console.log(`You drink health portion your health is ${p1.health}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("you loose, bettr luck next time");
            process.exit();
        }
    }
} while (true);

