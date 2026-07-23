import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}>

        <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600'
              // style={{ backgroundColor: "red" }}
            >Red</button>
            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600'
              // style={{ backgroundColor: "green" }}
            >Green</button>
            <button
              onClick={() => setColor("blue")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "blue" }}
            >Blue</button>
            <button
              onClick={() => setColor("gray")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "gray" }}
            >Gray</button>
            <button
              onClick={() => setColor("white")}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
              style={{ backgroundColor: "white" }}
            >white</button>
            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "black" }}
            >black</button>
          </div>

        </div>
        
      </div>

    </>
  )
}

export default App;
