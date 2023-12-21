import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Navigate } from 'react-router-dom';

function ChatComponent({user ,chatID}) {


  const [chats, setChats] = useState([]);
  const [redirect ,setRedirect] = useState(false) ;
  
  useEffect(()=>{
    const q = query(collection(db,'users', user?.uid,'chatroom' , chatID ,'messages'), orderBy("timestamp", "asc"));
    onSnapshot(q, (querySnapshot) => {
    const chats = [];
    querySnapshot.forEach((doc) => {
      chats.push({ 'id': doc.id , ...doc.data()});
    });
    setChats(chats);
    if(chats.length === 0){
      setRedirect(true)
    }
  });
  },[chatID])


  // console.log(chatID)

  // console.log(chats)

  if (redirect) return <Navigate to='/' />

  return (
    <div className='  '>
      {chats.map((item ,index) =><ChatMessage key={index} user={ item.role === 'user' ? true : false} item={item} />)}
      
    </div>
  )
}

export default ChatComponent