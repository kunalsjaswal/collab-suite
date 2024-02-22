import express from 'express';
import userRouter from './routers/user.router.js';
import messageRouter from './routers/message.router.js';
import groupRouter from './routers/group.router.js';
import connection from './db/connection.js';
import cors from 'cors'
import testingRouter from './routers/testing.router.js';

const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json())
app.use(cors())

app.use("/", userRouter);
app.use("/", messageRouter);
app.use("/", groupRouter);
app.use("/test",testingRouter)

async function start() {
    await connection.then(() => {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log('Server is running on port ' + PORT);
        });
    }).catch((err) => {
        console.log('Failed to connect to database: ', err.message);
    });

}

start();

