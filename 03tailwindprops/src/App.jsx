import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <div className='bg-green-500 text-black p-4 rounded-xl'>App</div>
      <Card username="Bharat" btnText='click me' myO={myObj} />
      <Card username="chaiaurcode" />
    </>
  )
}

export default App

