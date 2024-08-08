const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    accountType: { type: String, enum: ['credit', 'debit', 'loan'], required: true },
    balance: { type: Number, required: true }
});

module.exports = mongoose.model('Account', AccountSchema);
