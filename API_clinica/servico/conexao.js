import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'Nathan',
    password : '12345',
    database : 'clinica'
});

export default pool;