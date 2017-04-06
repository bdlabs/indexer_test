'use strict';

var Parser = require("../src/string/Parser.js");
var RegString = require("../src/string/RegString.js");

// import Parser from "../src/string/Parser.js";
// import RegString from "../src/string/RegString.js";

describe("Sprawdzenie wyrazenia regularnego - parser", function() {
	
		


	  it("Sprawdzenie wynikow", function() {
	    const reg = RegString;
	  	reg.reg = /[\w\:\-]+/img;
		var klasa = new Parser("napisy startowe przykladowe", reg);

		expect(klasa).toEqual([ 'napisy', 'startowe', 'przykladowe' ]);

	  });

});