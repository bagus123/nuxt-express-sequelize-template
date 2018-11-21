const path = require("path");
const rootPath = path.normalize(__dirname + "/..");
const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    root: rootPath,
    app: {
      name: "nuxt-express-template"
    },
    port: process.env.PORT || 3000,
    db: "postgres://root:root@localhost:5432/nuxt-dev"
  },

  test: {
    root: rootPath,
    app: {
      name: "nuxt-express-template"
    },
    port: process.env.PORT || 3000,
    db: "postgres://root:root@localhost:5432/nuxt-test"
  },

  production: {
    root: rootPath,
    app: {
      name: "nuxt-express-template"
    },
    port: process.env.PORT || 3000,
    db: "postgres://root:root@localhost:5432/nuxt-prod"
  }
};

module.exports = config[env];
