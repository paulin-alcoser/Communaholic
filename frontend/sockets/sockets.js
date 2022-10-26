import io from 'socket.io-client';
let socket;

export const initiateSocket = (room, username) => {
    socket = io('http://localhost:3000');
    console.log(`Connecting socket...`);
    if (socket && room) socket.emit('join', {room, username});

}

export const listenToNewConnections = (cb) => {
    if (!socket) return true
    console.log('listening to new connections....')
    socket.on('newConnection', ({numOfConnections, participants}) => cb(numOfConnections, participants))
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if (socket) socket.disconnect();
}
// export const subscribeToChat = (cb) => {
//     if (!socket) return (true);
//     socket.on('chat', msg => {
//         console.log('Websocket event received!');
//         return cb(null, msg);
//     });
// }
export const sendContribution = (data) => {
    console.log('sending...', data)
    if (socket) socket.emit('contributionSubmitted', data);
}

export const listenToContributions = (cb) => {
    if (!socket) return (true)
    console.log('listening to new contributions..')
    socket.on('newContribution', data => cb(data));
}