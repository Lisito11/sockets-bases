
const socketController = (socket) => {
    
    console.log('Client connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Client desconnect', socket.id);
    })

    socket.on('send-message', (payload, callback) => {
        const id = 123456;
        callback(id);
        
        socket.broadcast.emit('send-message', payload)
    })
}

module.exports = {
    socketController
}