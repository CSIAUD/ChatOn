import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running') // log dans CMD
  } else {
    console.log('Socket is initializing') // log dans CMD
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
        socket.on('form-submit', msg => {
            socket.broadcast.emit('form-submit', msg) // Message de retour en direction du front
        })
    })
  }
  res.end()
}

export default SocketHandler