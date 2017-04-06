class Parser {
	constructor(string, regstring){
		return string.match(regstring.reg);
	}
}

module.exports = Parser;