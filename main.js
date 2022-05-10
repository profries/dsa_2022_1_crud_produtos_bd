const cadastroProdutos = require('./cadastro_produtos.js')

//Main
//cadastroProdutos.inserir({nome: "mesa", preco:450});
//cadastroProdutos.inserir({nome: "cadeira", preco:180});
//cadastroProdutos.inserir({nome: "roupeiro", preco:840});
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
