const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    username: 'root',
    database: 'node-complete',
    password: 'Stark@1903'
});

module.exports = pool.promise();