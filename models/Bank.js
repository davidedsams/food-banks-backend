const mongoose = require('mongoose');

const BankSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
		unique: true,
	},
	typesOfFood: {
		type: String,
		required: true,
	},
	hoursOfOperation: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('bank', BankSchema);
