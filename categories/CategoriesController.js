const express = require('express');
const router = express.Router();

router.get("/categories", (req, res) => {
    res.send("ROTA DE CATEGORIAS")
});

router.get("/admin/categories/new", (req, res) => {
    res.send("ROTA PARA CRIACAO DE NOVA CATEGORIA");
});

module.exports = router;