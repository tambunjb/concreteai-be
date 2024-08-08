const RecurringPayment = require('../models/RecurringPayment');
const cron = require('node-cron');

async function routes(fastify, options) {
    fastify.post('/recurring-payment', async (request, reply) => {
        try {
            const recurringPayment = new RecurringPayment(request.body);
            await recurringPayment.save();
            reply.send(recurringPayment);
        } catch (err) {
            reply.send(err);
        }
    });

    fastify.get('/recurring-payments', async (request, reply) => {
        try {
            const recurringPayments = await RecurringPayment.find();
            reply.send(recurringPayments);
        } catch (err) {
            reply.send(err);
        }
    });

    // Schedule recurring payments
    cron.schedule('0 0 * * *', async () => {
        const payments = await RecurringPayment.find();
        payments.forEach(async (payment) => {
            // Process each recurring payment
            const transaction = {
                fromAccountId: payment.accountId,
                amount: payment.amount,
                timestamp: new Date(),
                status: 'completed'
            };
            await Transaction.create(transaction);
        });
    });
}

module.exports = routes;
