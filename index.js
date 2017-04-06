var indexer = require("./src/Indexer.js");
var Parser = require("./src/string/Parser.js");
var RegString = require("./src/string/RegString.js");

console.log("System Start!\n");

const i = new indexer("moj napi3_:-3s test");

let reg = RegString;
reg.reg = /[\w\:\-]+/img;
let klasa = new Parser(i.getString(), reg);


for(let i = 0; i < klasa.length; i++){
	console.log(klasa[i]);
}
