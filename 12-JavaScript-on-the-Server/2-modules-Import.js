// common js modules
// const {hello, Ahello} = require("./2-Modules-in-JavaScript");

// Ahello("niraj");
// hello();


// ES6 modules

  // "type": "module", is required in package.json file

import niraj, {hello, Ahello} from "./2-Modules-in-JavaScript.js";

Ahello("niraj");
hello();
niraj();
