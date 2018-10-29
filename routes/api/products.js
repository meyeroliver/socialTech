const express = require('express')
const router = express.Router()

// product model
const product = require('../../models/products')

// @route   GET api/products
// @desc    GET all products
// @access  public
router.get('/', (req, res) => {
    product
    .find()
    .sort({ date: -1 })
    .then(products => res.json(products))
}); // because we are already inside the required path

module.exports = router