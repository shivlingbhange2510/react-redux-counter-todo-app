import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addTask, editTask  } from '../redux/actionType'
export const AddTodo = ({edit}) => {
    const [check, setCheck]=useState(false)
    const[task, setTask]= useState(edit? edit.title:'')
    const data =useSelector(state=>state.todo);
    const dispatch=useDispatch()
    const submitTask =()=>{
        let data ={
            status:false,
            id:Math.random().toFixed(4) *10000,
            title: task
        }
        dispatch(addTask(data));
        console.log('task submited', data)
        setTask('')
    }
    const handleChange=(e)=>{
        setTask(e.target.value)
    }
    
    useEffect(() => {
        //   first
          setTask(edit.title)
         
        }, [edit])

const editData =()=>{
    const newData = data.map((item)=>item.id===edit.id ? {...item, title: task}:item )
    dispatch(editTask(newData))
    setTask('')
    setCheck(true)
    edit ={...edit, e:false}
}
  return (
    <div>
        <div>
            <input type="text" onChange={handleChange} value={task} placeholder="Enter Task..." />
            {/* <br /> */}
            <button type="submit" onClick={edit.e ? editData: submitTask} > { !check&&edit.e ? "Edit task" :"Add Task" } </button>
        </div>
    </div>
  )
}
