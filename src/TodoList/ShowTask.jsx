import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deleteTask ,changeStatus, editTask } from '../redux/actionType'
// import { v4 as uuidv4 } from 'uuid';

export const ShowTask = ({eidIs,setEdit}) => {
    const data =useSelector(state=>state.todo);
    const dispatch=useDispatch()
    const [taskList, setTaskList]=useState(data)

console.log('data is ', data)

const removeTask=(id1)=>{
const update = data.filter((item)=> item.id!==id1)
console.log("update", update, 'idd', id1)
dispatch(deleteTask(update))
setTaskList(update)
// data.map((item))
}
const chageStatus =(id2)=>{
    const toggle=data.map((item)=> item.id===id2 ? {...item, status: !item.status} :item);
    dispatch(changeStatus(toggle))
}

const editData=(id2)=>{
// const edit = data.map((item))
setEdit({...id2, e:true})
    
}
  return (
    <div>task List
        <table>
            <thead>
                <tr>
                    <th>SrNo</th>
                    <th>Task Name</th>
                    <th>Task Id</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                  data.map((item, index)=>{
                      return(
                        <tr key={item.id}>
                            <td> {index +1} </td>
                            <td> {item.title} </td>
                            <td>{item.id} </td>
                            <td> {item.status ? 'submited' : 'not submited'} </td>
                            <td> <button onClick={()=>{removeTask(item.id)}}>delete</button> 
                            <button onClick={()=>{chageStatus(item.id)}}>change status</button>
                            <button onClick={()=>{editData(item)}}>edit </button>
                             </td>
                            {/* <td> {item.} </td> */}
                        </tr>
                      )
                  })
              }
            </tbody>
        </table>
    </div>
  )
}
