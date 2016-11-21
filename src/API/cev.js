exports.read = function(req, res) {
	req.getConnection(function(err,connection){
		connection.query('SELECT CEV.cev_id,CEV.cev_fk_produto ,produto.pro_nome , CEV.cev_fk_cliente ,cliente.cli_nome , CEV.cev_tipo,EV.cev_quantidade,CEV.cev_tomador ,CEV.cev_valor,(SELECT DATE(CEV.cev_data)) ,  (SELECT TIME(CEV.cev_data)) FROM CEV INNER JOIN produto ON CEV.cev_fk_produto = produto.pro_id INNER JOIN cliente ON CEV.cev_fk_cliente = cliente.cli_id;',[id],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
}

exports.create = function(req, res) {
 	var data = req.body;

	req.getConnection(function(err,connection){
		connection.query("INSERT INTO CEV (cev_fk_produto,cev_fk_cliente,cev_tipo,cev_quantidade,cev_valor) VALUES (?,?,'?',?,?);" ,[data,data2,data3,data4,data5],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
 }


exports.profile = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('SELECT CEV.cev_id,CEV.cev_fk_produto ,produto.pro_nome , CEV.cev_fk_cliente ,cliente.cli_nome , CEV.cev_tipo,CEV.cev_quantidade,CEV.cev_tomador ,CEV.cev_valor,(SELECT DATE(CEV.cev_data)) ,  (SELECT TIME(CEV.cev_data)) FROM CEV INNER JOIN produto ON CEV.cev_fk_produto = produto.pro_id INNER JOIN cliente ON CEV.cev_fk_cliente = cliente.cli_id WHERE cev_id=?;',[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result[0]);
		});
	});
}

exports.update = function(req, res) {
 	var data = req.body,
 		id 	   = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("UPDATE cev SET CEV.cev_fk_produto = ?, CEV.cev_fk_cliente = ?, CEV.cev_tipo = ?, CEV.cev_quantidade, CEV.cev_tomador, CEV.cev_valor WHERE CEV_id = ?'",[data, data2, id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}
