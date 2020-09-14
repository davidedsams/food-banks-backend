const express = require('express');
const router = express.Router();

// @route       GET api/banks
// @desc        Get all banks
// @access      Public
router.get('/', (req, res) => {
	res.send('Get all banks');
});

// @route       POST api/banks
// @desc        Add a new bank
// @access      Public
router.post('/', (req, res) => {
	res.send('Add bank');
});

// @route       PUT api/banks/:id
// @desc        Update a bank
// @access      Public
router.put('/:id', (req, res) => {
	res.send('Update bank');
});

// @route       DELETE api/banks/:id
// @desc        Delete a bank
// @access      Public
router.delete('/:id', (req, res) => {
	res.send('Delete bank');
});

module.exports = router;
