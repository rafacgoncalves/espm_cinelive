angular.module('espm_cinelive').controller('CadastroEfetuadoController',
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
                texto: 'Não foi possível obter o cliente.'
            };
            console.log(erro);
        }
        );
    } else {
        $scope.cliente = new Cliente();
    };
});