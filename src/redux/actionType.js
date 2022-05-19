// import
import {ADD_TODO,EDIT_TODO,DELETE_TODO,CHANGE_STATUS, INCREMENT_COUNTER , DECREMENT_COUNTER, RESET_COUNTER } from './action'

const incrementVal = (payload)=>{
    return{
        type: INCREMENT_COUNTER,
        payload
    }
}
const decrementVal = (payload)=>{
    return{
        type:DECREMENT_COUNTER,
        payload
    }
}

const resetVal = ()=>{
    return{
        type: RESET_COUNTER
    }
}
const addTask = (payload)=>{
    return{
        type: ADD_TODO,
        payload
    }
}
const deleteTask =(payload)=>{
    return{
        type: DELETE_TODO,
        payload
    }
}

const changeStatus =(payload)=>{
    return{
        type: CHANGE_STATUS,
        payload
    }
}

const editTask=(payload)=>{
    return{
        type: EDIT_TODO,
        payload
    }
}
export { incrementVal, decrementVal,addTask,deleteTask, editTask, resetVal,changeStatus}