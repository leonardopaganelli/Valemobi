exports.read = function(req, res) {
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM categoria WHERE (cat_deletado IS NULL)',[],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
}

exports.create = function(req, res) {
 	var data = req.body;

	req.getConnection(function(err,connection){
		connection.query("INSERT INTO categoria (cat_nome) VALUES('?')" ,[data],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
 }


exports.profile = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM categoria WHERE (cat_deletado IS NULL) AND cat_id=?',[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result[0]);
		});
	});
}

exports.update = function(req, res) {
 	var data = req.body,
 		id 	   = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE produto SET cat_nome = '?'  WHERE cat_id = ?'",[data, data2, id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}

exports.delete = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE produto SET cat_deletado = '*'  WHERE cat_id = ?'",[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}