exports.read = function(req, res) {
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM produto WHERE (pro_deletado IS NULL)',[],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
}

exports.create = function(req, res) {
 	var data = req.body;

	req.getConnection(function(err,connection){
		connection.query("INSERT INTO produto (pro_fk_categoria,pro_nome,pro_lote_min) VALUES ('?','?','?'')" ,[data],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
 }


exports.profile = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM produto WHERE (pro_deletado IS NULL) AND pro_id=?',[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result[0]);
		});
	});
}

exports.update = function(req, res) {
 	var data = req.body,
 		id 	   = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE produto SET pro_fk_categoria = '?', pro_nome='?', pro_lote_min='?'  WHERE pro_id = ?'",[data, data2, data3, id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}

exports.delete = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE produto SET pro_deletado = '*' WHERE pro_id = ?'",[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}