// ** CommonJS, every file is module (by default)
// ** Modules - Encapsulated Code (only share minium)

const { john, peter } = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade");

console.log(data.items[0]);
console.log(data.items[1]);
console.log(data.singlePerson.name);
