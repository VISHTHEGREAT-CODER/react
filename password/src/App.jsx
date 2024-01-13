import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

 function App() {
  const [length, setlength] = useState(0);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charAllowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState('');

  const passwordref=useRef(null)
  const passwordtoclipboard=useCallback(()=>
  {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  const passwordgenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberallowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()';
    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, charAllowed, numberallowed, setpassword]);


  useEffect(()=>{passwordgenerator()},[length,numberallowed,charAllowed,setpassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center mb-3 my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 mb-3 '
          placeholder='password'
          ref={passwordref}
          readOnly></input>
          <button onClick={passwordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 mb-3'>copy</button>
          
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 mb-2'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}/>
            <label className='ml-3'>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1 mb-2'>
            <input 
            type="checkbox"
            defaultChecked={numberallowed}
            id="numberinput"
            className='cursor-pointer'
            onChange={()=>{setnumberallowed((prev)=>!prev)}}/>
            <label htmlFor='numberinput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 mb-2'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterinput"
            className='cursor-pointer'
            onChange={()=>{setcharallowed((prev)=>!prev)}}/>
            <label htmlFor='characterinput'>Chracters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
