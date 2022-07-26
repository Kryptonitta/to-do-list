import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import './App.css';

const toDos = [
  {text: "Learn React LVL 1", completed: true},
  {text: "Learn React LVL 2", completed: false},
  {text: "Learn React LVL 3", completed: false},
  {text: "Learn React LVL 4", completed: false},
]

function App() {
  return (
    < div className="classContainer">
      <TodoCounter />    
      <TodoSearch /> 
      <TodoList>
        {/*Acá lo que hago es realizar un mapeo del listado de items y mostrarlo */}
        {toDos.map(toDo => {
          return (
            <TodoItem key={toDo.text} Text={toDo.text} />
          );
        })}
      </TodoList>
      <CreateTodoButton /> 
    </div>
  );
}


export default App;
