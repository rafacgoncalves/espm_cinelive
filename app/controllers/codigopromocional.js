module.exports = function (app) {
    
    var CodigoPromocional = app.models.codigopromocional;
    
    var controller = {};
    
    controller.salvaCodigoPromocional = function (req, res) {
        var codigo = req.body.codigo;
        
        if (codigo) {
            CodigoPropmocional.findByIdAndUpdate(_id, req.body).exec()
			.then(function (codigopromocional) {
                res.json(codigopromocional);
            }, function (erro) {
                console.log(erro);
                res.status(500).json(erro);
            })
        } else {
            CodigoPropmocional.create(req.body)
			.then(function (codigopromocional) {
                res.status(201).json(codigopromocional);
            },
				function (erro) {
                console.log(erro);
                res.status(500).json(erro);
            });
        }

    };
    
    
    return controller;
};