const cadastroProdutos = require('./cadastro_produtos.js')

//Main
cadastroProdutos.inserir({nome: "sanduiche", preco:10},
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
    });

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

cadastroProdutos.buscarPorId(2, 
    function(erro, produto) {
        console.log("BuscarPorId(2): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(produto);
        }

});

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

//console.log("Atualizar: ");
//console.log(cadastroProdutos.atualizar(
//    3, {id:3, nome: "roupeiro", preco:850}
//));

//console.log("Deletar: ");
//console.log(cadastroProdutos.deletar(1));

//console.log("Listar: ");
//console.log(cadastroProdutos.listar());
