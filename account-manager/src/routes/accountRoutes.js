const Account = require('../models/Account');
const Transaction = require('../models/Transaction');

async function routes(fastify, options) {
    fastify.post('/account', async (request, reply) => {
        try {
            const newAccount = new Account(request.body);
            await newAccount.save();
            reply.send(newAccount);
        } catch (err) {
            reply.send(err);
        }
    });

    fastify.get('/accounts', async (request, reply) => {
        try {
            const accounts = await Account.find();
            reply.send(accounts);
        } catch (err) {
            reply.send(err);
        }
    });

    fastify.get('/account/:id', async (request, reply) => {
        try {
            const account = await Account.findById(request.params.id);
            reply.send(account);
        } catch (err) {
            reply.send(err);
        }
    });

    fastify.put('/account/:id', async (request, reply) => {
        try {
            const account = await Account.findByIdAndUpdate(request.params.id, request.body, { new: true });
            reply.send(account);
        } catch (err) {
            reply.send(err);
        }
    });

    fastify.delete('/account/:id', async (request, reply) => {
        try {
            await Account.findByIdAndDelete(request.params.id);
            reply.send({ message: 'Account deleted' });
        } catch (err) {
            reply.send(err);
        }
    });

    fastify.get('/account/:id/transactions', async (request, reply) => {
        try {
            const transactions = await Transaction.find({ accountId: request.params.id });
            reply.send(transactions);
        } catch (err) {
            reply.send(err);
        }
    });
}

module.exports = routes;
