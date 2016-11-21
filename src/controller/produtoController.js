module.exports = { 
	getProdutos: function(req,res,next){
		res.render('produtos/produtos');
	}
}

/*app.controller('ProdutosController', function($scope,$http){

	scope.produtos = [];
	$scope.mostra = true;

	$http.get('./produtos').success(function(retorno){
		$scope.produtos = retorno;
	}).error(function(msg){
		$scope.mensagem = "Houve um erro ao acessar o serviço. Tente mais tarde.";
		console.log(msg);
	})

});


var	mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'valemobi'
});

connection.connect();

var cond = 'NULL';
var prod = '1';

connection.query('SELECT * FROM produto WHERE (pro_deletado IS ' + cond + ' ) AND pro_id = ' + prod ,function(err,result){
	res.send(result);
})
*/