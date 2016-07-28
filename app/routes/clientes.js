module.exports = function (app) {
	var controller = app.controllers.clientes;
	
	app.route('/clientes')
	.get()
	.post(controller.salvaCliente);
	app.route('/clientes/:id')
	.get(controller.obtemCliente)
	.delete(controller.removeCliente);
};