import { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  console.log("Name:", name);

  const handaleChange = (e) =>{
    setName(e.target.value);
    console.log("Input Value:", e.target.value);
  }

  return (
    <>
     <div> Onchange Example {name}  </div>
     <input type="text"  value={name}
    //  onChange={(e) => setName(e.target.value)}
      onChange={handaleChange}
     placeholder="Enter your name" />
     <button onClick={() => setName("")}>clear</button>
     <div>Live preview {name} </div>
    </>
  )
}

export default App
