// Comman.js every file is a module (by default)
// Modules - Module is an object, Encapsulated Code (only share minium)


// const name = require("")
const { personOne, personTwo} = require("./04-names");
const greetings = require("./05-utils");

greetings("Sohan");
greetings(personOne);
greetings(personTwo);