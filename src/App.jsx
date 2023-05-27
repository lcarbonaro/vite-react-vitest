import './App.css'
import {useState} from 'react';

export default function App() {  
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div>
      
      <div>hello world</div>

      <div>
        <input placeholder="enter name for a special greeting" onChange={(e)=>{setName(e.target.value);}}/>
      </div>

      <div>{name ? `HOWDY ${name.toUpperCase()}!!` : ''}</div>

      <div>
        <button onClick={ ()=>{ setCount(count + 1);} }>{`counter:${count}`}</button>
      </div>
      
    </div>
  )
}
