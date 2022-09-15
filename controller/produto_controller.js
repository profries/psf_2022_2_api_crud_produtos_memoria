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

let idGerador = 3;

function geraId() {
    return idGerador++
}


exports.listar = (req, res) => {
    res.json(listaProdutos)
}

exports.buscarPorId = (req, res) => {
    const id = req.params.id;

    for (const produto of listaProdutos) {
        if(produto.id == id){
            return res.json(produto);
        }
    }
    res.status(404).json({"msg":"Produto nao encontrado"})
}

exports.inserir = (req,res) => {
    
    let produto = req.body
    
    produto.id = geraId()    
    listaProdutos.push(produto)
    
    res.status(201).json(produto)

}


exports.atualizar = (req, res) => {
    const id = req.params.id;
    const produtoAtualizado = req.body;

    let produto = listaProdutos.find( 
        function (produto) {
            return (produto.id == id);
        } 
    );
    if(produto) {
        if(produtoAtualizado.nome) 
            produto.nome = produtoAtualizado.nome;
        if(produtoAtualizado.preco) 
            produto.preco = produtoAtualizado.preco;
        res.json(produto);
    }
    else {
        res.status(404).json({msg:"Produto nao encontrado"});
    }

}

exports.deletar = (req, res) => {
    const id = req.params.id;

    const indRemover = listaProdutos.findIndex(
        (produto) => produto.id == id
    )
    
    if(indRemover >= 0) {
        res.json(listaProdutos.splice(indRemover, 1));
    }
    else {
        res.status(404).json({msg:"Produto nao encontrado"});
    }
}