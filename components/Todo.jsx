import React,{useState,useEffect} from 'react';
import Todos from './Todos.jsx';

function Form(){
  const [todo,setTodo] = useState([]);
    const [name ,setName] = useState('')
    useEffect(()=>{
      let todos = localStorage.getItem('todos');
      setTodo(JSON.parse(todos));
    },[])
    
Subrahmanya Mayya
      localStorage.setItem('todos',JSON.stringify(todo));
    }, [todo])
    
    function addName(e) {
      let value = e.target.value;
      setName(value)
    }
    function genId(){
      return Math.floor(Math.random() * 9999999)
    }
    function addTodo(e){
      e.preventDefault();
      setName('')
      setTodo((pre) => {
        return [...pre,{id : genId(),todo:name}]
      }
      )
    }
    
    function removeTodo(id){
      let todos = [...todo];
      let updatedTodo = todos.find(t => t.id === id)
      let newTodos = todos.filter(x => x.id != updatedTodo.id)
      setTodo(newTodos)
    }
    
  return (
    <div>
    <div className="form text-center">
      <form onSubmit={addTodo}>
        <input type="text" name="todo" placeholder="todo..." class="inptodo" value={name} onChange={addName} required/>
        <button class="submit" type="submit"><span className="submit-text">+</span></button>
      </form>
    </div>
    
    <div className="todos">
      {todo.map(t => <Todos key={t.id} todo = {{id:t.id,todo:t.todo}} updateTodo={removeTodo}/>)}
    </div>
    </div>
    )
}
export default Form;