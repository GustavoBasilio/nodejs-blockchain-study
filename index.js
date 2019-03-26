const Blockchain = require('./Blockchain'),
    express = require('express'),
    bodyParser = require('body-parser');

const app = express();
const appBlockchain = new Blockchain();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/addMessage', (req, res) => {
    appBlockchain.addNewBlock(req.body.message);
    res.send(appBlockchain.blocks[appBlockchain.blocks.length -1]);
});

app.get('/viewMessages', (req, res) => res.send(appBlockchain.blocks));

app.listen(3000);