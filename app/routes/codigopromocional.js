module.exports = function (app) {
    var controller = app.controllers.codigopromocional;
    
    app.route('/codigopromocional')
    .get()
    .post(controller.salvaCodigoPromocional);

};