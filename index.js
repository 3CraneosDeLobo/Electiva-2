const path = require('path');
const express = require('express');
const app = express();

// settings

app.set('port', process.env.PORT || 3000);

// static files

const public = path.join(__dirname, 'public');
const contador = path.join(__dirname, 'public/contador.html');
const movil = path.join(__dirname, 'public/movil.html');
app.use(express.static(public));

app.get('/contador', function (req, res){
    res.sendFile(contador);
})
app.get('/movil', function (req, res){
    res.sendFile(movil);
})

// Start the server

const puerto = app.get('port');
const server = app.listen(puerto, '0.0.0.0', () => {
    console.log('Server on Port ', puerto);
});

//WebSockets
const SocketIO = require('socket.io');
const io = SocketIO(server);


io.on('connection', (socket) => {
    console.log('new conecction', socket.id);

    socket.on('semaforo:cruzar', (vf) => {

io.sockets.emit('semaforo:cruzar', vf);

   
    });
    socket.on('semaforo:activar', (vf) => {

        io.sockets.emit('semaforo:activar', vf);
        
           
            });
});