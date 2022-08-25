const express = require('express')
const app = express()

const listaProdutos = [
    {
        id: 1,
        nome: "PS4",
        preco: 4000
    },
    {
        id: 2,
        nome: "XBOX",
        preco: 2500
    }
]

app.get('/api/produtos', (req, res) => {
    res.json(listaProdutos)
})

app.get('/api/produtos/:id', (req, res) => {
    const id = req.params.id;

    for (const produto of listaProdutos) {
        if(produto.id == id){
            res.json(produto);
        }
    }
    res.status(404).json({"msg":"Produto nao encontrado"})
})


app.listen(3000, () => {
    console.log("Iniciando o servidor...")
})