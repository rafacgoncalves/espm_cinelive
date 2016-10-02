angular.module('espm_cinelive').factory('Venda', 
	function ($resource) {
	return $resource('/vendas/:id');
});