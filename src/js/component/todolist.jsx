import React,{useState,useEffect} from 'react';

let cont=0;

export default function ToDoList () {
    const [inputValue, setInputValue ] = useState('');
    const [allTodos, setAllTodos ] = useState([]);
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          if(inputValue.trim() !== "") {
            let todo = [...allTodos];
            todo.push({id:cont,value:inputValue});
            cont++;
            setAllTodos(todo);
          }
        }
      }
      

    const deleteToDo = (index) => {
      let todoAux = [];
      allTodos.map((item)=>{ 
        if(item.id!=index){
          todoAux.push(item);
        }
      })  
      setAllTodos(todoAux);
    }

    return (
        
			  <div className="content mx-auto">
          <input type="text" className="form-control input" onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={handleKeyDown}/>
          <div>
              {allTodos.map((x) => (
                    <div key={x.id} className="justify-content-between d-flex todoComplete">
                      <div className='todo'>{x.value}</div>
                      <i key={x.id} className=" fa-solid fa-xmark delete" onClick={()=>deleteToDo(x.id)}></i>
                    </div>
              ))}

              {allTodos.length>0?<div className='description text-start'>{allTodos.length+" item left"}</div>:<div className='description text-center'>No tasks, add tasks</div>} 
          
                  
          </div>
        </div>)
}