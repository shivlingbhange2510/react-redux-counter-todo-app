import "./App.css";
import { store } from "./redux/store";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementVal, decrementVal, resetVal } from "./redux/actionType";
// import { useState } from 'react';
import { Counter } from "./Counter/Counter";

import { Todo } from "./TodoList/Todo";
function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Counter />

      <hr />
      <Todo />
    </div>
  );
}

export default App;
