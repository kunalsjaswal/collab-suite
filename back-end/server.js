import express from 'express';
import userRouter from './routers/user.router.js';
import messageRouter from './routers/message.router.js';
import groupRouter from './routers/group.router.js';
import connection from './db/connection.js';

const app = express();

app.use(express.json())

app.use("/", userRouter);
app.use("/", messageRouter);
app.use("/", groupRouter);

async function start() {
    await connection.then(() => {
        console.log('Connected to database');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    }).catch((err) => {
        console.log('Failed to connect to database: ', err.message);
    });

}

start();

