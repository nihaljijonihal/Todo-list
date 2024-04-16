import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delTodo , toogleComplete } from './todoSlice'




function Result() {

  // REDUX
  const todolist = useSelector(state => state.todoReducer.todoArray)
  const dispatch = useDispatch()
 
  //Computing Counts
  const [count, setCount] = useState(0)
  const [doneCount, setDoneCount] = useState(0)
  


  useEffect(() => {

    setCount(todolist.length);
    let i=0;
    todolist.forEach(todo => {
      if(todo.completed)
      i++;
      setDoneCount(i);
    });
  }, [todolist]);




  return (
    <>
      <h3>Items are :</h3>
      <div className='d-flex justify-content-center'>
        <div style={{ width: '70%' }}>

{/* OL for maping the todos */}
          <ol className='fw-bolder  border-rounded'>
            {todolist.map((todo) => (

              <li key={todo.id} className='fs-5 ms-3 p-1 ' >
              <div className='d-flex align-items-center'>
                
                  <button disabled={!todo.completed}
                    onClick={()=>dispatch(delTodo(todo.id))} 
                    className='btn ms-1 me-4 btn-primary fw-bolder pt-1 pb-1 mb-1'>
                      <i className='fa-solid fa-trash'></i>
                  </button>
                
                 


              <div className='me-3' onClick={()=>dispatch(toogleComplete(todo.id))} >    
                <i style={{fontSize:'2.3rem',color: todo.completed ? 'green' : ''}} className={` ${todo.completed ? 'fa-solid fa-square-check  ' : 'fa-regular fa-square-check '}`}></i>
              </div>
              

               {todo.todo}
              </div>

              </li>


            ))}

          </ol>







        </div>
      </div>
      <br />

{/* Displaying Number of todos */}
      <h4>Total No Of Todos : {count}</h4>
      <h4>Total No Of Done Todos : {doneCount}</h4>

    </>
  )
}

export default Result