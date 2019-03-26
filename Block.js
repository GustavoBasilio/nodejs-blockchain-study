class Block {

    constructor(index, previousHash, data) {
        this.index = index;
        this.previousHash = previousHash;
        this.hash = '';
        this.nonce = 0;
        this.timestamp = new Date().getTime();
        this.data = data;
    }
    
}

module.exports = Block;