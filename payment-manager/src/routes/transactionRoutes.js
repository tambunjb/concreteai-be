const Transaction = require('../models/Transaction');
const Account = require('../models/Account');


async function routes(fastify, options) {
    fastify.post('/send', async (request, reply) => {
        try {
            const reqData = request.body;
            // Process the transaction
            const accountSender = await Account.findById(reqData.accountId);
            const accountReceiver = await Account.findById(reqData.recipientId);
            await Account.findByIdAndUpdate(accountSender.id, { balance: accountSender.balance-reqData.amount })
            await Account.findByIdAndUpdate(accountReceiver.id, { balance: accountReceiver.balance+reqData.amount })
            const transaction = { ...reqData, status: 'completed' };
            await Transaction.create(transaction);
            reply.send(transaction);
        } catch (err) {
            reply.send(err);
        }
    });

    fastify.post('/withdraw', async (request, reply) => {
        try {
            const reqData = request.body;
            // Process the transaction
            const account = await Account.findById(reqData.accountId);
            await Account.findByIdAndUpdate(account.id, { balance: account.balance-reqData.amount })
            const transaction = { ...reqData, status: 'completed' };
            await Transaction.create(transaction);
            reply.send(transaction);
        } catch (err) {
            reply.send(err);
        }
    });

    fastify.get('/transactions', async (request, reply) => {
        try {
            const transactions = await Transaction.find();
            reply.send(transactions);
        } catch (err) {
            reply.send(err);
        }
    });

    fastify.get('/transaction/:id', async (request, reply) => {
        try {
            const transaction = await Transaction.find({$or:[{ accountId: request.params.id }, { recipientId: request.params.id }]});
            reply.send(transaction);
        } catch (err) {
            reply.send(err);
        }
    });
}

module.exports = routes;
