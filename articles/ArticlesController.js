const express = require('express');
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("ROTA PARA ARTIGO");
});

router.get("/admin/articles/new", (req, res) => {
    res.send("ROTA PARA CRIACAO DE NOVO ARTIGO");
});

module.exports = router;