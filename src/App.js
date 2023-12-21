import React, { useEffect, useState } from 'react'
import LoginScreen from './screens/LoginScreen'
import AppScreen from './screens/AppScreen'
import SignInFlow from './screens/SignInFlow'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './utils/ErrorPage'
import { auth } from './firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import ChatScreen from './screens/ChatScreen'


function App() {

  const [user,setUser] = useState(() => auth.currentUser);

  useEffect(()=>{
    onAuthStateChanged(auth,(u) => {
      if(u){
        setUser(u)

      }else{
        setUser(null)
      }
    })
  },[])
  return (
    <div>

<BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <AppScreen user={user} setFn={setUser}/> : <LoginScreen/>} />
            <Route path="/auth/:id" element={<SignInFlow user={user} setFn={setUser}/>} />  
            <Route path="/c" element={<ErrorPage/>}/>
            <Route path="/c/:chatId" element={user ? <ChatScreen user={user} setFn={setUser}/> : <ErrorPage/>} />
            {/* <Route path="/share/:shareID" element={user ? <AppScreen/> : <ErrorPage/>}/> */}
          </Routes>
        </BrowserRouter>
       
      {/* <LoginScreen/>
       <Sidebar/> */}

    </div>
  )
}

export default App

