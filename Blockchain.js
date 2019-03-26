const sha256 = require('js-sha256'),
    Block = require('./Block');

class Blockchain {
    
    constructor() {
        this.blocks = [];
        this.addGenesisBlock();
    }

    addGenesisBlock() {
        if (this.blocks.length > 0) {
            return;
        }
        let genesis = new Block(0, '00000000', 'Genesis block');
        genesis.hash = '00000000';
        this.blocks.push(genesis);
    }

    addNewBlock(data) {
        let newBlock = new Block(
            this.blocks.length,
            this.blocks[this.blocks.length - 1].hash,
            data
        );
        newBlock.hash = this.generateHash(newBlock);
        this.blocks.push(newBlock);
    }

    generateHash(block) {
        let hash = '';
        while(true) {
            hash = sha256(
                block.index +
                block.previousHash +
                block.nonce +
                block.timestamp +
                block.dataHash
            );
            if (hash.startsWith('0000')) break;
            block.nonce = block.nonce + 1;
        }
        return hash;
    }

}

module.exports = Blockchain;
