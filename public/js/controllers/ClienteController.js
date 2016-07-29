angular.module('espm_cinelive').controller('ClienteController',
	function ($scope, $routeParams, Cliente, $location) {
  
    Cliente.query(function (clientes) {
        $scope.clientes = clientes;
    });
    
    if ($routeParams.clienteId) {
        Cliente.get({ id: $routeParams.clienteId },
	function (cliente) {
            $scope.cliente = cliente;
        },
	function (erro) {
            $scope.mensagem = {
                texto: 'N�o foi poss�vel obter o cliente.'
            };
            console.log(erro);
        }
        );
    } else {
        $scope.cliente = new Cliente();
    };
    
    $scope.salva = function () {

        if ($scope.formCadastro.$valid) {
             
            $scope.cliente.$save()
            .then(function (cliente) {
                $scope.mensagem = {
                    texto: 'Salvo com sucesso'
                };
                //$scope.cliente = new Cliente();
                console.log(cliente);
                $location.path('/cadastroefetuado/' + cliente._id);
            })
            .catch(function (erro) {
                $scope.mensagem = {
                    texto: 'N�o foi poss�vel salvar o cliente.'
                };
                console.log(erro);
            });
        };
    };

});