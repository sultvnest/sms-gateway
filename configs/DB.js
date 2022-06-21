import { createPool } from "mysql";
import { HOST, USER, PASSWORD, DATABASE, POOL, PORTDB } from "../configs/config.js";

let connection = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    pool: POOL,
    port: PORTDB
});

export default connection;