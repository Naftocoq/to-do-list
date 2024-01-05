import { ADD_TASK, DELETE_TASK, DONE_TASK, UPDATE_TASK } from "./ActionTypes"

export const add_task = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask
  }
}
// delete
export const delete_task = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }

}

// done/undone
export const done_task = (id) => {
  return {
    type: DONE_TASK,
    payload: id
  }
}

// update task


export const update_task = (id, updatedDescription) => {
  return {
    type: UPDATE_TASK,
    payload: { id, updatedDescription },
  }
}