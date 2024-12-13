import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordChanger = useCallback(() => {
    let pass= "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str +="0123456789";
    if(charAllowed) str+="~!@#$%^&*()_+}{[]:';?><,./";
    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); 
    };
    setPassword(pass);

  }, [length,numberAllowed,charAllowed,setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,21);
    window.navigator.clipboard.writeText(password);
  },[password]) 

  useEffect(() => {
    passwordChanger();
  },[length, numberAllowed, charAllowed, passwordChanger])

  return (
    <div className='bg-slate-500 h-screen w-full text-white flex flex-col align-center'>
      <div className='mt-16 flex mx-auto w-[60%] gap-2' >
        <input type="text" value={password} placeholder='Password'
          className='outline-none w-full text-black' readOnly ref={passwordRef} />
        <button className='bg-red-400 text-lg rounded-lg p-1' 
          onClick={copyPassword}>COPY</button>
      </div>
      <div className='mt-5 mx-3 flex overflow-hidden flex-wrap w-full gap-x-2'>
        <input className='cursor-pointer' 
          type="range" value={length} min={0} max={25}
          onChange={(e) => setLength(e.target.value)} />
        <label htmlFor="length">Length: {length}</label>
        <input type='checkbox' id="numberInput" defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}} />
        <label htmlFor="numberInput">Numbers</label>
        <input type='checkbox' id='charInput' defaultChecked={charAllowed} onChange={() =>{setCharAllowed((prev) => !prev)} } />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
  )
}

export default App
