const express = require("express")
const app = express()
const server = require("http").createServer(app)
const io = require("socket.io")(server)
const port = 3000;

io.on("connection", socket => {
    console.log(`Connected: ${socket.id}`);
    socket.on('disconnect', () =>
        console.log(`Disconnected: ${socket.id}`));
    socket.on('join', (room) => {
        console.log(`Socket ${socket.id} joining ${room}`);
        socket.join(room);
        const numberOfConnections = io.sockets.adapter.rooms.get(room).size 
        console.log('num of con: ', numberOfConnections)
        socket.emit("newConnection", numberOfConnections ); //socket.id el cliente que join_room
        socket.to(room).emit("newConnection", numberOfConnections); 
    });

    socket.on('chat', (data) => {
        const { message, room } = data;
        console.log(`msg: ${message}, room: ${room}`);
        io.to(room).emit('chat', message);
    });
    // socket.on('submitContribution', data => {
    //     console.log('contribution submitted: ', data.contribution)
    //     io.emit("newContribution", data.contribution)
    // })
})

server.listen(port, () => console.log("server running on port" + port))