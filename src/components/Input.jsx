import React, { useState } from 'react'

const Input = ({ onSubmit }) => {
  const [input, setInput] = useState("")

  const handleSubmit = () => {
    if (!input) return;

    onSubmit(input); 
    setInput("");
  }

  return (
    <div className='inputContainer'>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder='Add Task' 
        className='input' 
      />
      <button onClick={handleSubmit} className='button'>Add</button>
    </div>
  )
}

export default Input
