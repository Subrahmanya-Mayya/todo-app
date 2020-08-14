import React from 'react';
import Title from './Title.jsx';
import Todo from './Todo.jsx';

function Main(){
  return (
    <div className="box bg-info text-white">
      <div className="upper-box">
         <Title name = "TodoApp"/>
         <Todo/>
      </div>
  </div>  
    
    )
}

export default Main;