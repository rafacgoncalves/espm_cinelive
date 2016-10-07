var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        },
        cpf: {
            type: Number,
            required: true
        },
        telefone: {
            type: Number
        },
        cep: {
            type: Number
        },
        email: {
            type: String,
            required: true
        },
        codigocupom: {
            type: String,
            required: true
        }
		//email: {
		//	type: String,
		//	required: true,
		//	index: { unique: true }
  //      },
  //      senha: {
  //          type: String,
  //          required: true
  //      }
    });
    
    return mongoose.model('Cliente', schema);
};