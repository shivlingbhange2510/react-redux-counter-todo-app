
import React,  { useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { incrementVal,decrementVal, resetVal } from '../redux/actionType'
// import { useState } from 'react';

export const Counter = () =>{
  const data =useSelector(state=>state);
  const dispatch=useDispatch();

  const [counter, setCounter] = useState(data)
  // console.log('dis')
  console.log('dddddd', data, )
  
  const increMent =(val)=>{
    dispatch(incrementVal(val))
  }
  const reset =()=>{
    dispatch(resetVal())
  }
  const decre = (val)=>{
    dispatch(decrementVal(val))
  }
  return (
    <div className="App">
      <h1>  Counte App </h1>
    <h4>
      Count : {data.counter}
    </h4>
    <button onClick={()=>increMent(1)}>Increnet value </button>
    <button onClick={()=>decre(1)}>Decrement value</button>
    <button onClick={reset}>Reset value </button>
    <hr/>
    </div>
  );
}

export default Counter;
