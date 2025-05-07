const http = require('http');
const fs = require('fs');
const path = require('path');
const { Server } = require('socket.io');

// Створити сервер
const server = http.createServer((req, res) => {
    const pathToIndex = path.join(__dirname, 'static', 'index.html');
    const indexHtmlFile = fs.readFileSync(pathToIndex);

    if (req.url === '/') {
        return res.end(indexHtmlFile);
    }
    res.statusCode = 404;
    return res.end('Error 404');
});

// Після створення server — підключити Socket.IO
const io = new Server(server);

// Обробка з'єднань
io.on("connection", (socket) => {
    console.log('User has connected. ID: ' + socket.id);
});

// Запуск сервера
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});