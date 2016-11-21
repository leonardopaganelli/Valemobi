var express = require('express'),
	app = express(),
	porta = 80,
	mysql = require('mysql'),
	favicon = require('serve-favicon');

app.listen(porta, function(){
	console.log('Executando na porta: ' + porta);
	console.log('Executando no diretorio: ' + path.join(__dirname, '/../','src'));
})

const path = require ('path');

app.use(express.static(path.join(__dirname, '/../','src')));

app.use(function(req, res, next){
	console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
	next();
})
