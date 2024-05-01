import pg from 'pg';
import 'dotenv/config';

const {Pool} = pg;

export const pool = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.CONNECTION_STRING
})

const testConecction = async () =>{
    try {
        const response = await pool.query('SELECT NOW()')
        console.log('Coneccion OK...')
    } catch (err){
        console.log(err)
    }
}

testConecction();


