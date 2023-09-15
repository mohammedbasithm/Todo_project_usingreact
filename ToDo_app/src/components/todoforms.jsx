import React,{useState} from 'react'

const Todoforms = ({addTodo}) => {
    const[value,setvalue]=useState("")
    const handleSubmit=e=>{
        e.preventDefault();

        addTodo(value)
        setvalue('')
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='what is the task today?' onChange={(e)=>setvalue(e.target.value)}/>
        <button type='submit' className='todo-btn'>AddTask</button>
    </form>
  )
}

export default Todoforms
