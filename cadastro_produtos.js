//const Client = require('pg').Client;
const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'crud_produtos'
};

//Iniciando o inserirProduto
function inserir(produto, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO produtos(nome, preco) VALUES ($1, $2) RETURNING *";
    const values = [produto.nome, produto.preco];

    cliente.query(sql, values, 
        function (err, res){
            callback(err, res.rows[0]);
            cliente.end();
        })

}




function listar(callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM produtos";
    cliente.query(sql, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let produtos = res.rows;
                callback(undefined, produtos);     
            }
            cliente.end();
        }
    )    
}

function buscarPorId(id, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM produtos WHERE id=$1";
    const values = [id];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let produto = res.rows[0];
                callback(undefined, produto);
            }
            else {
                const error = "Produto nao encontrado";
                callback(error, undefined);
            }

            cliente.end();
        }
    )    
}


function atualizar(id,produtoAlterado) {
}

function deletar(id) {
}

module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar
}