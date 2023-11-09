'use client'
import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
import { Message } from '../../src/components/Message';
let socket: any;

const Test = () => {
  const [input, setInput] = useState('')
  const [msgs, setMessages] = useState('')

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

  const classes = "flex flex-col items-start p-1 w-64 gap-8 pt-6 pb-4";
  const userId = "2";
  const msgs = [
    {
      id: 0,
      createdAt: "2008-06-01 09:59:59",
      updatedAt: "",
      body: "COUCOU first",
      author: {
        id: "1",
        name: "Jean"
      },
      authorId: "1",
    },
    {
      id: 0,
      createdAt: "2008-06-01 10:02:23",
      updatedAt: "",
      body: "COUCOU 2",
      author: {
        id: "3",
        name: "Jeanne"
      },
      authorId: "3",
    },
    {
      id: 0,
      createdAt: "2008-06-01 10:03:21",
      updatedAt: "",
      body: "COUCOU 3",
      author: {
        id: "2",
        name: "Guy"
      },
      authorId: "2",
    },
    {
      id: 0,
      createdAt: "2008-06-01 10:05:12",
      updatedAt: "",
      body: "COUCOU 4",
      author: {
        id: "4",
        name: "Frank"
      },
      authorId: "4",
    },
    {
      id: 0,
      createdAt: "2008-06-01 10:07:56",
      updatedAt: "",
      body: "COUCOU 5",
      author: {
        id: "2",
        name: "Guy"
      },
      authorId: "2",
    },
    {
      id: 0,
      createdAt: "2008-06-01 10:08:45",
      updatedAt: "",
      body: "COUCOU 6",
      author: {
        id: "3",
        name: "Jeanne"
      },
      authorId: "3",
    },
    {
      id: 0,
      createdAt: "2008-06-01 10:12:34",
      updatedAt: "",
      body: "COUCOU 7",
      author: {
        id: "1",
        name: "Jean"
      },
      authorId: "1",
    },
    {
      id: 0,
      createdAt: "2008-06-01 10:14:23",
      updatedAt: "",
      body: "COUCOU 8",
      author: {
        id: "4",
        name: "Frank"
      },
      authorId: "4",
    },
  ]

  return (
    <>
    <div className={classes}>
      {msgs.map(msg => <Message msg={msg} user={userId}/>)}
    </div>
    <form action="" onSubmit={onEmitHandler}>
      <input
        placeholder="Type something"
        value={input}
        onChange={onChangeHandler}
        id="text-input"
      />
      <input type="submit" value="Envoyer" />
    </form>
    </>
  )
}

export default Test;