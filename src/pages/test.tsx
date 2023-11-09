import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
let socket: any;

const Test = () => {
  const [input, setInput] = useState('')

  useEffect(() => {socketInitializer()}, [])

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected') // Log dans navigateur
    })

    socket.on('form-submit', (msg: string) => { // Récupération du message de retour du socket
      setInput(msg)
    })
  }

  const onChangeHandler = (e: any) => {
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }
  const onEmitHandler = (e: any) => {
    e.preventDefault();
    let input = ([].slice.call(e.target.children)).find((item: HTMLElement) => item.id === "text-input") as HTMLInputElement | undefined;
    if(input){
      setInput(input.value || "")
      socket.emit('form-submit', input.value) // Envoi de la data avec un nom de socket
    }else{
      console.log("input undefined");
    }
  }

  return (
    <form action="" onSubmit={onEmitHandler}>
      <input
        placeholder="Type something"
        value={input}
        onChange={onChangeHandler}
        id="text-input"
      />
      <input type="submit" value="Envoyer" />
    </form>
  )
}

export default Test;