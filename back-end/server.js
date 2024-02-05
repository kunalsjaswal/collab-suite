import express from 'express';
import userRouter from './routers/user.router.js';
import connection from './db/connection.js';

const app = express();

app.use(express.json())

app.use("/", userRouter);

async function start() {
    const conn = await connection.then(() => {
        console.log('Connected to database');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    }).catch((err) => {
        console.log('Failed to connect to database');
    });

}

start();

