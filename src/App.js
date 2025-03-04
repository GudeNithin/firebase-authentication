import React,{useState,useEffect} from 'react'
import {auth} from './firebase'
import UserAuth from './UserAuth'
import Home from './Home'
import './App.css'
const App = () => {
  const [presentUser,setPresentUser]=useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div>
      <center>
        {presentUser?<Home presentUser={presentUser}/>:<UserAuth/>}
      </center>
    </div>
  )
}

export default App

// https://firebase-authentication-sigma.vercel.app/ -- Deployment Link
