var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        idCliente: {
            type: mongoose.Schema.ObjectId,
            ref: 'Cliente',
            required: true
        },        
        codigo: {
            type: String,
            required: true,
            index: { unique: true }
        }
    });
    return mongoose.model('CodigoPromocional', schema);
};