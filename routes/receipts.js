const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all receipts', hello: req.hello});
});

router.post('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Create a new receipt'});
});

router.get('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Show receipt ${req.params.id}`});
});

router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update receipt ${req.params.id}`});
});

router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete receipt ${req.params.id}`});
});

module.exports = router;