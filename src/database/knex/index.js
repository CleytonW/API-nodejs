const knex = require("knex");
const config = require("../../../knexfile");
const knexfile = require("../../../knexfile");

const connection = knex(config.development);

module.exports = connection;