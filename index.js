const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

//VIEW ENGINE
app.set('view engine', 'ejs');

//STATIC
app.use(express.static('public'));

//BODY PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DATABASE
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com banco de dados estabelecida com sucesso");
}).catch((error) => {
    console.log(error);
});

//ROUTES
app.get("/", (req, res) => {
    res.render("index");
});

app.use("/", categoriesController); 

app.use("/", articlesController);

//SERVER
app.listen(8080, () => {
    console.log("Conexão com o servidor estabelecida com sucesso");
});