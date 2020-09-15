const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Bank = require('../models/Bank');

// @route       GET api/banks
// @desc        Get all banks
// @access      Public
router.get('/', async (req, res) => {
	// I NEED TO FIX THIS TO RETURN ALL FOOD BANKS FOR ANY USER
	//
	try {
		const banks = await Bank.findAll({ banks: banks.req.body });
		res.json(banks);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
	//
	// !!!
});

// @route       POST api/banks
// @desc        Add a new bank
// @access      Public
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('location', 'Location is required').not().isEmpty(),
		check('typesOfFood', 'Types of Food are required').not().isEmpty(),
		check('hoursOfOperation', 'Hours of Operation are required')
			.not()
			.isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, location, typesOfFood, hoursOfOperation } = req.body;

		try {
			const newBank = new Bank({
				name,
				location,
				typesOfFood,
				hoursOfOperation,
			});

			const bank = await newBank.save();

			res.json(bank);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route       PUT api/banks/:id
// @desc        Update a bank
// @access      Private
router.put('/:id', auth, async (req, res) => {
	const { name, location, typesOfFood, hoursOfOperation } = req.body;

	// Build bank object
	const bankFields = {};
	if (name) bankFields.name = name;
	if (location) bankFields.location = location;
	if (typesOfFood) bankFields.typesOfFood = typesOfFood;
	if (hoursOfOperation) bankFields.hoursOfOperation = hoursOfOperation;

	try {
		let bank = await Bank.findById();

		if (!bank) return res.status(400).json({ msg: 'Bank not found' });

		// Make sure user owns bank
		if (bank.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		bank = await Bank.findByIdAndUpdate(
			req.params.id,
			{ $set: bankFields },
			{ new: true }
		);

		res.json(bank);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route       DELETE api/banks/:id
// @desc        Delete a bank
// @access      Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let bank = await Bank.findById();

		if (!bank) return res.status(400).json({ msg: 'Bank not found' });

		// Make sure user owns bank
		if (bank.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		await Bank.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Bank removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
