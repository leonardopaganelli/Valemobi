var app = angular.module('Projeto',['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
	
	$routeProvider.when('/',{
		templateUrl: 'partials/bem-vindo.tpl.html'
	});

	$routeProvider.when('/produto',{
		templateUrl: 'partials/produto.tpl.html'
	});

	$routeProvider.when('/produtoController',{
		templateUrl: 'controller/produtoController.js'
	});

	$routeProvider.when('/produto.criar',{
		templateUrl: 'partials/produto.criar.tpl.html'
	});

	$routeProvider.when('/cev',{
		templateUrl: 'partials/cev.tpl.html'
	});

	$routeProvider.when('/cev.criar',{
		templateUrl: 'partials/cev.criar.tpl.html'
	});


	$routeProvider.when('/cliente',{
		templateUrl: 'partials/cliente.tpl.html'
	});

	$routeProvider.when('/cliente.criar',{
		templateUrl: 'partials/cliente.criar.tpl.html'
	});


	$routeProvider.when('/parceiro',{
		templateUrl: 'partials/parceiro.tpl.html'
	});

	$routeProvider.when('/parceiro.criar',{
		templateUrl: 'partials/parceiro.criar.tpl.html'
	});

	$routeProvider.when('/estoque',{
		templateUrl: 'partials/estoque.tpl.html'
	});

	$routeProvider.when('/categoria',{
		templateUrl: 'partials/categoria.tpl.html'
	});

	$routeProvider.when('/categoria.criar',{
		templateUrl: 'partials/categoria.criar.tpl.html'
	});
	
	$routeProvider.otherwise({redirectTo: '/'});
});
/*
app.Factory('Produtos', function($http, API){
	return{
		read: function(){
			return $http.get(API + 'produtos');
        },
        create: function(item){
            return $http.post(API+'produtos', item);
        },
        profile: function(id){
            return $http.get(API+'produtos/'+id);   
        },
        update: function(item, id){
            return $http.put(API+'produtos/'+id, item); 
        },
        delete: function(id){
            return $http.delete(API+'produtos/'+id);
        }
	}
});
*/