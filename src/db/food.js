import mongoose from 'mongoose'
import {cpus} from 'os'
const productsSchem= new mongoose.Schema({
    _id:String,
    name:String,
    brand:String,
    bar_code:Number,
    grade:Number,
    pictures:[String],
    ingredients:[Object]
})
export const productModel =mongoose.model('product',productsSchem,'products')