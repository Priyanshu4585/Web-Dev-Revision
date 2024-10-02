// var generateName = require("sillyname") note: require works with CJS


import generateStupidName from "sillyname";

import {randomSuperhero} from 'superheroes';

// var sillyname1 = generateName();

var sillyname = generateStupidName();

var name =randomSuperhero();

console.log(`My name is ${sillyname}!`)

console.log(`My Superhero name is ${name}!`)