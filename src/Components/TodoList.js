import React, { useState } from 'react'
import {useSelector} from  'react-redux'
import TodoCard from './TodoCard'
import { Dropdown } from 'react-bootstrap'

const TodoList = () => {
    const list = useSelector((state) =>state.listTasks)
    const [filter, setFilter] = useState("All")
  return (
    <div>
      <div style={{marginLeft: '20px'}}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {filter}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setFilter("All")}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter("Done")}>
              Done
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter("Undone")}>
              Undone
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {filter === "Done"
        ? list
            .filter((task) => task.isDone === true)
            .map((task) => <TodoCard task={task} key={task.id} />)
        : filter === "Undone"
        ? list
            .filter((task) => task.isDone === false)
            .map((task) => <TodoCard task={task} key={task.id} />)
        : list.map((task) => <TodoCard task={task} key={task.id} />)}
    </div>
  )}
export default TodoList
