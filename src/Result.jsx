import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { delTodo } from './todoSlice'




function Result() {
  const todo = useSelector(state => state.todoReducer.counter)
  const todolist = useSelector(state => state.todoReducer.todoArray)

  const dispatch = useDispatch()
  console.log(todolist.length);
  const [count, setCount] = useState(0)
  const [checkedItems, setCheckedItems] = useState([]);


  useEffect(() => {

    setCount(todolist.length);
  }, [todolist]);


  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      <h3>Items are :</h3>
      <div className='d-flex justify-content-center'>
        <div style={{ width: '70%' }}>


          {
            todolist.map((item, index) => (

              <Row key={index} className={` ${checkedItems[index] ? 'bg-success' : ''}`}>
                <Col className='  '>{index + 1}. Done :<input
                  className='ms-2'
                  type="checkbox"
                  onChange={() => handleCheckboxChange(index)}
                  checked={checkedItems[index]}
                /></Col>
                <Col className='' xs={8}>{item}</Col>
                <Col className=''>
                  <Button onClick={() => dispatch(delTodo(item))} variant="warning" className='ms-5 '>Delete</Button>
                </Col>
              </Row>


            ))
          }









        </div>
      </div>
      <br />
      <h4>Total No Of Todos  :{count}</h4>

    </>
  )
}

export default Result