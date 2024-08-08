const mongoose = require('mongoose');

const RecurringPaymentSchema = new mongoose.Schema({
    accountId: { type: mongoose.Schema.Types.ObjectId, required: true },
    amount: { type: Number, required: true },
    interval: { type: String, enum: ['daily', 'weekly', 'monthly'], required: true },
    startDate: { type: Date, required: true }
});

module.exports = mongoose.model('RecurringPayment', RecurringPaymentSchema);
