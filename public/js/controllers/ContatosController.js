angular.module('indicadores').controller('ContatosController', 
	function ($scope, Contato) {
	
	
	$scope.mensagem = { texto: '' };
	$scope.contatos = [];
	$scope.filtro = '';
	$scope.total = 0;
	
	$scope.incrementa = function () {
		$scope.total++;
	};
		
	function buscaContatos() {
		var promise = Contato.query().$promise;
		promise
			.then(function (contatos) {
			$scope.contatos = contatos;
		})
			.catch(function (erro) {
			$scope.mensagem = { texto: "Não foi possível obter a lista de contatos" };
			console.log(statusText);
		});
	};
	
	
	buscaContatos();
	
	$scope.remove = function (contato) {
		var promise = Contato.delete({ id: contato._id }).$promise;
		promise
			.then(buscaContatos)
			.catch(function (erro) {
			$scope.mensagem = { texto: "Não foi possível remover o contato" };
			console.log(erro);
		});
	};

/*		$http.get('/contatos')
		.success(function(data){
			$scope.contatos = data;
		})
		.error(function(statusText){
			console.log("Não foi possível obter a lista de contatos");
			console.log(statusText);
		});*/


});