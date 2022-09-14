const express = require('express')
const app = express()

const produtoRota = require('./rotas/produto_rotas')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/produtos', produtoRota);

app.listen(3000, () => {
    console.log("Iniciando o servidor...")
})