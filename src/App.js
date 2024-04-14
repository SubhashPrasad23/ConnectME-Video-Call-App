import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
function App() {

  const [value,setValue]=useState()
const navigate=useNavigate()
const handleJoin=useCallback(()=>{
navigate(`/room/${value}`)
},[value,navigate])

  return (
    <div> 
      <input type="text" placeholder="Enter Room Code" className="border-2" value={value} onChange={e=>setValue(e.target.value)}/>
      <button className=" bg-blue-400  px-3 text-white" onClick={handleJoin}>Join</button>
    </div>
  
  );
}

export default App;
