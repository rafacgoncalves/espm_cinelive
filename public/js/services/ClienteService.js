angular.module('espm_cinelive').factory('Cliente', 
	function ($resource) {
	return $resource('/clientes/:id');
});