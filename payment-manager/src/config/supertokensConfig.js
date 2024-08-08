const SuperTokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");

SuperTokens.init({
    framework: "fastify",
    supertokens: {
        connectionURI: "http://supertokens:3567",
    },
    appInfo: {
        appName: "payment-manager",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3001",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        Session.init(),
    ],
});
