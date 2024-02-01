const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// io.on('connection', (socket) => {
//     console.log('a user connected')
//     socket.on('chat', (msg) => { console.log(msg); });
//     socket.emit("hello", "from server")
//     socket.on('disconnect', () => { console.log('user disconnected'); });
// });
let clients = 0
io.on('connection', (socket) => {
    clients++;
    io.sockets.emit("broadcast", { description: clients + ' clients connected!' });
    socket.on('disconnect', () => {
        clients--;
        io.sockets.emit("broadcast", { description: clients + ' clients connected!' });
    });
});



http.listen(3000, () => { console.log('listening on port 3000'); });

