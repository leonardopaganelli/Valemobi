exports.read = function(req, res) {
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM cliente WHERE (cli_deletado IS NULL)',[],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
}

exports.create = function(req, res) {
 	var data = req.body;

	req.getConnection(function(err,connection){
		connection.query("INSERT INTO cliente (cli_nome,cli_cpf,cli_tel,cli_email) VALUES('?','?','?','?')" ,[data, data2, data3, data4],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
 }


exports.profile = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM cliente WHERE (cli_deletado IS NULL) AND cli_id=?',[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result[0]);
		});
	});
}

exports.update = function(req, res) {
 	var data = req.body,
 		id 	   = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE cliente SET cli_nome = '?', cli_cpf = '?', cli_tel = '?', cli_email= '?'  WHERE cli_id = ?",[data, data2, data3, data4, id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}

exports.delete = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE produto SET cli_deletado = '*'  WHERE cat_id = ?'",[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}