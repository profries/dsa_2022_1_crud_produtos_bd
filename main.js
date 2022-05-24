const cadastroProdutos = require('./cadastro_produtos.js')

//Main
/*cadastroProdutos.inserir({nome: "sanduiche", preco:10},
    function(err, produtoInserido) {
        console.log("INSERINDO pastel...")
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log("produto inserido: ");
            console.log(produtoInserido);
        }
    });*/

cadastroProdutos.listar(
    function(err, produtos) {
        console.log("Listar: ");
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log(produtos);

        }
    }
);

/*cadastroProdutos.buscarPorId(2, 
    function(erro, produto) {
        console.log("BuscarPorId(2): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(produto);
        }

});*/

cadastroProdutos.buscarPorId(4, 
    function(erro, produto) {
        console.log("BuscarPorId(4): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(produto);
        }
});

cadastroProdutos.deletar(7, function(erro, produto) {
    console.log("Produto deletado (7): ");
    if(erro) {
        console.log("Erro: "+erro);
    }
    else {
        console.log(produto);
    }
});

/*cadastroProdutos.atualizar(1, {nome: "torrada", preco: 10.5}, 
    function(erro, produto) {
        console.log("Atualizar Produto(1): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(produto);
        }
});*/




