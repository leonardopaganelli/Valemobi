parceiro.jsexports.read = function(req, res) {
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM parceiro WHERE (par_deletado IS NULL)',[],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
}

exports.create = function(req, res) {
 	var data = req.body;

	req.getConnection(function(err,connection){
		connection.query("INSERT INTO parceiro (par_nome,par_cnpj,par_tel,par_email) VALUES('?','?','?','?')" ,[data, data2, data3, data4],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
 }


exports.profile = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM parceiro WHERE (par_deletado IS NULL) AND par_id=?',[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result[0]);
		});
	});
}

exports.update = function(req, res) {
 	var data = req.body,
 		id 	   = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE parceiro SET par_nome = '?', par_cnpj = '?', par_tel = '?', par_email= '?'  WHERE par_id = ?",[data, data2, data3, data4, id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}

exports.delete = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE parceiro SET par_deletado = '*'  WHERE par_id = ?'",[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}