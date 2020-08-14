import React from 'react';

function Todos({todo,updateTodo}){
  function deleteTodo(){
    updateTodo(todo.id)
  }
  return (
     <div className="todo"><h3>{todo.todo} <button className="cancel bg-danger float-right text-white" onClick={deleteTodo}>x</button></h3></div>
    )
}

export default Todos;