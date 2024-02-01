const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => { console.log('user disconnected'); });
});
http.listen(3000, () => { console.log('listening on port 3000'); });