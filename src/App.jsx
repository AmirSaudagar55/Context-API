import { useState } from 'react'
import './App.css'
import Profile from './content/Components/Profile'
import UserContextProvider from './content/UserContextProvider'
import Login from './content/Components/Login'

function App() {
  return (
    <>
        <UserContextProvider >
          <h1>React</h1>
          <Login/>
          <Profile/>
        </UserContextProvider>
    </>
  )
}

export default App
