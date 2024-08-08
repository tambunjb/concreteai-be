const Fastify = require('fastify');
const mongoose = require('mongoose');
const { getSession } = require('supertokens-node/recipe/session');

const transactionRoutes = require('./routes/transactionRoutes');
const recurringPaymentRoutes = require('./routes/recurringPaymentRoutes');

require('./config/supertokensConfig');

const fastify = Fastify({ logger: true });

fastify.register(require('fastify-plugin')(async (fastifyInstance) => {
    fastifyInstance.addHook('preHandler', async (request, reply) => {
        try {
            request.session = await getSession(request, reply);
        } catch (err) {
            reply.status(401).send({ message: "Unauthorized" });
            return;
        }
    });
}));

fastify.register(transactionRoutes);
fastify.register(recurringPaymentRoutes);

const start = async () => {
    try {
        await mongoose.connect('mongodb://mongo:27017/concreteai-bank', { useNewUrlParser: true, useUnifiedTopology: true });
        await fastify.listen(3001, '0.0.0.0');
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
