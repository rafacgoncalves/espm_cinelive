angular.module('espm_cinelive').factory('CodigoPromocional', 
	function ($resource) {
    return $resource('/codpro');
});