var mongoose = require('mongoose');
var employeeSchema = mongoose.Schema({

    _id: {
        type: String,
        required: true
    },

    eName: {
        type: String,
        required: true
    },

    eEmail: {
        type: String,
        required: true
    },
	
	ephno:{
		type: String,
		required: true
	},
     addrees: {
		 type: String,
		 required: true
	 }
});

module.exports = mongoose.model('Naveencollection', employeeSchema);


