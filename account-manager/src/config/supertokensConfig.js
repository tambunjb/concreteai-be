const SuperTokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");
const EmailPassword = require("supertokens-node/recipe/emailpassword");

SuperTokens.init({
    framework: "fastify",
    supertokens: {
        connectionURI: "http://supertokens:3567",
    },
    appInfo: {
        appName: "account-manager",
        apiDomain: "http://localhost:3000",
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(),
        Session.init(),
    ],
});
