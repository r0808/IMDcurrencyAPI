const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransferSchema = new Schema({
    message: String,
    user: String,
    to_user: String,
    amount: Number,
    date: Date,
    completed: Boolean
})
const Transfer = mongoose.model('Transfer', TransferSchema);

module.exports = Transfer;