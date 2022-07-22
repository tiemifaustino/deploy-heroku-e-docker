const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`<h1> Executando com DOCKER na porta ${PORT} </h1>`));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
