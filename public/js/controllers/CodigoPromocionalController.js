angular.module('espm_cinelive').controller('CodigoPromocionalController',
	function ($scope, $routeParams, CodigoPromocional) {
    
    $scope.textoinformativo = 'Digite o código do cupom';
    
    CodigoPromocional.query(function (codigopromocional) {
        $scope.codigopromocional = codigopromocional;
    });
    
    if ($routeParams.codigopromocionalId) {
        CodigoPromocional.get({ id: $routeParams.codigopromocionalId },
	function (codigopromocional) {
            $scope.codigopromocional = codigopromocional;
        },
	function (erro) {
            $scope.mensagem = {
                texto: 'Não foi possível obter o código promocional.'
            };
            console.log(erro);
        }
        );
    } else {
        $scope.cliente = new CodigoPromocional();
    };
    
    $scope.salva = function () {
        $scope.codigopromocional.$save()
		.then(function () {
            $scope.mensagem = {
                texto: 'Salvo com sucesso'
            };
            $scope.codigopromocional = new CodigoPromocional();
        })
		.catch(function (erro) {
            $scope.mensagem = {
                texto: 'Não foi possível salvar o código promocional.'
            };
            console.log(erro);
        });
    };

});