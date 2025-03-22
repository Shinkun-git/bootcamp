const pkg = require('pg');
const util = require('util');
const config = require('../../config/index.js');

const { Pool } = pkg;

const sql_pool = new Pool({
    user: config.dbUser,
    database: config.database,
    password: config.dbPassword,
    port: config.dbPort,
    max: config.max,
    idleTimeoutMillis: config.idleTimeoutMillis,
    connectionTimeoutMillis: config.connectionTimeoutMillis,
});

const pool = {
    query: (sql, args) => {
        return util.promisify(sql_pool.query).call(sql_pool, sql, args);
    },
};

module.exports = pool;
