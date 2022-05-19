import React,{useState} from 'react'
import {AddTodo} from './AddTodo'
import {ShowTask} from './ShowTask'
export const Todo = () => {
const [edit, setEdit]= useState({})
  const eidIs=(val)=>{
    // setEdit(val)
    console.log('edit data ', val)
  }
console.log('edit true', edit)
  return (
    <div>
        <h2>Todo List</h2>
        <AddTodo edit={edit} />
        <ShowTask idIs={eidIs} setEdit={setEdit}/>
    </div>
  )
}
