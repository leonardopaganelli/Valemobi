var express = require('express'),
	app = express(),
	porta = 80,
	mysql = require('mysql'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	connection = require("express-myconnection");

connection.connect();

app.use(connection(mysql, {
host: "localhost",
user: "root",
password: "root",
database: "datamobil"
},'request'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



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


