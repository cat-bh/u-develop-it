const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        // Your password here
        password: '',
        database: 'election'
    },
    console.log('Connected to the databse')
);

module.exports = db;