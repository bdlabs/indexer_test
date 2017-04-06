class Indexer {
	constructor(string){
		this.mojnapis = string;
	}

	getString(){
		if(typeof this.mojnapis !== 'undefined')
			return this.mojnapis.toUpperCase();
		return this.getString('empty');
	}
}

module.exports = Indexer;