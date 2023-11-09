import { Server } from 'Socket.IO'

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log('Socket is already running') // log dans CMD
  } else {
    console.log('Socket is initializing') // log dans CMD
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', (socket: any) => {
      socket.on('msg-send', (msg: string) => {
        socket.broadcast.emit('msg-send', msg) // Message de retour en direction du front
      })
      socket.on('msg-edit', (msg: string) => {
        socket.broadcast.emit('msg-edit', msg) // Message de retour en direction du front
      })
      socket.on('msg-delete', (msg: string) => {
        socket.broadcast.emit('msg-delete', msg) // Message de retour en direction du front
      })
    })
  }
  res.end()
}

export default SocketHandler