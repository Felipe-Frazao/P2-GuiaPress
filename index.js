const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

//VIEW ENGINE
app.set('view engine', 'ejs');

//STATIC
app.use(express.static('public'));

//BODY PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DATABASE
connection.authenticate().then(() => {
    console.log("Conexão com banco de dados estabelecida com sucesso");
});

//ROUTES
app.get("/", (req, res) => {
    res.render("index");
});

//SERVER
app.listen(8080, () => {
    console.log("Conexão com o servidor estabelecida com sucesso");
});