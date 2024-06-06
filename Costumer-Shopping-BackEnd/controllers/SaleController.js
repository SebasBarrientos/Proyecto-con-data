const Sale = require("../models/Sale");


const SaleController = {
    async create(req,res){
        try {
            const sale = await Sale.create(req.body)
            res.status(201).send(sale)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Theres been a problem creating sale' })
        }
    },

    async getAll(req, res) {
        try {

            console.log("asdnkasndjasbdjhasdjb");
           const sales = await Sale.find()
           res.send(sales)
        } catch (error) {
            console.error(error);
        }
    },





}

module.exports = SaleController;