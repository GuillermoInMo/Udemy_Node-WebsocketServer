const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);
    
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    socket.on('enviar-mensaje', ( payload ) => {
        console.log('Enviar mensaje desde server', payload);
        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = {
    socketController
}