const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir todos os arquivos da raiz
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});