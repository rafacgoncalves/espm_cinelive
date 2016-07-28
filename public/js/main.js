angular.module('espm_cinelive', ['ngRoute','ngResource'])
.config(function($routeProvider){
	//$routeProvider.when('/clientes', {
	//	templateUrl: 'partials/clientes.html',
	//	controller: 'ContatosController'
	//});
	$routeProvider.when('/cliente', {
		templateUrl: 'partials/cliente.html',
		controller: 'ClienteController'
	});
	$routeProvider.when('/cadastroefetuado/:clienteId',{
		templateUrl: 'partials/cadastroefetuado.html',
		controller: 'CadastroEfetuadoController'
    });
    
    console.log('n�o entrou na rota certa');
	$routeProvider.otherwise({redirectTo: '/cliente'}); 
});