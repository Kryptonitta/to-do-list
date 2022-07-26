import React from "react";
import './TodoList.css';

//El props.children lo que hace es decir que el hijo va a heredar los props de su padre. 

function TodoList(props){
    return(
        <section className="ToDoList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};