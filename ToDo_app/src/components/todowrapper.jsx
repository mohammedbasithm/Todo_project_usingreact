import React,{useState} from 'react'
import Todoforms from './todoforms'
import { Todo } from './todo'
import { EditTodoforms } from './edittodoform'

export const TodoWrapper = () => {
    const[todos,setTodos]=useState([])
    const addTodo=todo=>{
        setTodos([...todos,{id:Date.now(),task:todo,completed:false,isEditing:false}])
        console.log(todos)
    }
    const toggleComplete=id=>{
      setTodos(todos.map(todo=>todo.id ===id ? {
        ...todo,completed:!todo.completed}:todo))
    }
    const deleteTodo=id=>{
      setTodos(todos.filter(todo=>todo.id !==id))
    }
    const editTodo=id=>{
      setTodos(todos.map(todo=>todo.id===id ?{
        ...todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask= (task, id) =>{
      setTodos(todos.map(todo=>todo.id ===id ?{
        ...todo,task,isEditing:!todo.isEditing}:todo))
    }
  return (
    <div className='TodoWrapper '>
      <h1>Get Things Done!</h1>
      <Todoforms addTodo={addTodo}/>
      {todos.map((todo,index)=>(
        todo.isEditing ?(
          <EditTodoforms editTodo={editTask} task={todo}/>
        ):(
          <Todo task={todo} key={index} toggleComplete={toggleComplete}
          deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
        
      ))}
    </div>
  )
}


