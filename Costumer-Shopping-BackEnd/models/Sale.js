const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    invoice_no: String,
    customer_id: String,
    gender: String,
    age: Number,
    category: String,
    quantity: Number,
    price: Number,
    payment_method: String,
    invoice_date: Date ,
    shopping_mall: String,

}, { timestamps: true });

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;