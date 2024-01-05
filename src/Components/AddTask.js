import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add_task } from '../JS/Actions'

const AddTask = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState("")
  const handleAddTask = () => {
dispatch(add_task({id: Math.random(), description:todo, isDone:false}))
  }
  return (
    <div style={{ display: "flex", margin: "5px 20px" }}>
      <div style={{ width: "75%" }}>
        <Form.Control
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new task ..."
        />
      </div>
      <div style={{ width: "10%" }}>
        <Button onClick={() => handleAddTask()}>Add Task</Button>
      </div>
    </div>
  )
}

export default AddTask