import asyncHandler from 'express-async-handle'
import express from 'express'
import Product from '../models/productModel.js'
const router = express.Router()


//@desc    Fatch all products
//@route   GET /api/products
//@access  public

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

//@desc    Fatch single products
//@route   GET /api/products/:id
//@access  public



app.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(400).json({ message: 'Product not found' })
    }

}))

export default router;

