const app = require("./app");
const db = require("./mongo");
const http = require("http").Server(app);

module.exports = http;
