const { signUp, signIn } = require("supertokens-node/recipe/emailpassword");
const { createNewSession } = require('supertokens-node/recipe/session');

async function routes(fastify, options) {

    fastify.post('/register', async (request, reply) => {
        const { email, password } = request.body;
        try {
            let signUpResponse = await signUp(email, password);
            if (signUpResponse.status === "OK") {
                reply.send({ message: "User signed up successfully", user: signUpResponse.user });
            } else {
                reply.send({ message: "Email already exists" });
            }
        } catch (err) {
            reply.send({ message: "Error signing up user", error: err.message });
        }
    });
    
    fastify.post('/login', async (request, reply) => {
        const { email, password } = request.body;
        try {
            let signInResponse = await signIn(email, password);
            if (signInResponse.status === "OK") {
                let session = await createNewSession(reply, signInResponse.user.id, {}, {});
                reply.send({
                    message: "User signed in successfully",
                    user: signInResponse.user,
                    accessToken: session.getAccessToken()
                });
            } else {
                reply.send({ message: "Incorrect email or password" });
            }
        } catch (err) {
            reply.send({ message: "Error signing in user", error: err.message });
        }
    });
}

module.exports = routes;
