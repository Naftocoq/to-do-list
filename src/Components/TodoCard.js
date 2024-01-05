import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { delete_task, done_task, update_task } from "../JS/Actions"

const TodoCard = ({ task }) => {
  const [showDelete, setShowDelete] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [editedDescription, setEditedDescription] = useState(task.description)

  const handleCloseDelete = () => setShowDelete(false)
  const handleShowDelete = () => setShowDelete(true)

  const handleCloseEdit = () => {
    setEditedDescription(task.description)
    setShowEdit(false)
  }

  const handleShowEdit = () => setShowEdit(true)

  const dispatch = useDispatch()

  const handleDeleteTask = () => {
    dispatch(delete_task(task.id))
    handleCloseDelete()
  }

  const handleDoneTask = () => {
    dispatch(done_task(task.id))
  }
  // Dispatch the update_task action
  const handleEditTask = () => {
    dispatch(update_task(task.id, editedDescription))
    handleCloseEdit()
  }

  return (
    <div
      style={{
        backgroundColor: task.isDone ? "lightgreen" : "white",
        display: "grid",
        gridTemplateColumns: "75% 25%",
        margin: "10px 20px",
        width: "1200px",
      }}
    >
      <h4>{task.description}</h4>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={() => handleDoneTask()}>
          {task.isDone ? "unDone" : "Done"}{" "}
        </Button>
        <Button variant="warning" onClick={handleShowEdit}>
          Edit
        </Button>
        <Button onClick={handleShowDelete} variant="danger">
          <b>X</b>
        </Button>
      </div>

      {/* Edit modal */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task "{task.description.slice(0,7)}" </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete modal */}
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteTask}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TodoCard
