import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('black');

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-1 shadow-lg bg-white px-2 py-3 rounded-xl'>
          <button onClick={() => setColor("Red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("Green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={() => setColor("Blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Blue"}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
