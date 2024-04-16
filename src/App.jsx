import { useState } from 'react'


import './App.css'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Result from './Result'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'


function App() {
  const dispatch = useDispatch()
  const [input,setInput] = useState()

  const handleAdd =() =>{
    dispatch(addTodo(input))
    setInput("")
  }
  return (
    <>

      <div className='container mt-5'>
        <h1 className='fw-bolder'>My Todo List</h1>
          <Row>
            <Col><Form.Control value={input} onChange={(e)=>setInput(e.target.value)}   type="text" placeholder="Todo Name" /></Col>
            <Col><Button onClick={()=>handleAdd()} variant="success" className='ms-5 '>Submit</Button></Col>
            <Col></Col>
          </Row>
        <br /><br />
         <Result/>
        </div>
    </>
  )
}

export default App
