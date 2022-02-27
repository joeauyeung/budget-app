// Setup connection to the postgres database

import { Pool } from 'pg';

const pool = new Pool({
    user: 'docker',
    password: 'password',
    host: 'localhost',
    port: 8080,
    database: 'postgres'
});