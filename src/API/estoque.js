exports.read = function(req, res) {
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM estoque',[],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
}

exports.create = function(req, res) {
 	var data = req.body;

	req.getConnection(function(err,connection){
		connection.query("INSERT INTO estoque (est_fk_produto,est_qtd,est_qtd_alu_doador,est_qtd_alu_tomador) VALUES(?,?,?)" ,[data, data2, data3],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
 }


exports.profile = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM estoque WHERE est_fk_produto=?',[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result[0]);
		});
	});
}

exports.update = function(req, res) {
 	var data = req.body,
 		id 	   = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE estoque SET est_qtd = ?, est_qtd_alu_doador = ?, est_qtd_alu_tomador = ? WHERE est_fk_produto = ?",[data, data2, data3, , id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}