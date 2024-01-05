import { ADD_TASK, DELETE_TASK, DONE_TASK, UPDATE_TASK } from "./ActionTypes"

const initialState = {
  listTasks: [
    { id: Math.random(), description: "Description 1", isDone: false },
    { id: Math.random(), description: "Description 2", isDone: true },
    { id: Math.random(), description: "Description 3", isDone: false },
  ],
}

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, listTasks: [...state.listTasks, payload] }
    // delete task
    case DELETE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.filter((task) => task.id !== payload),
      }

    // done task
    case DONE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      }

    // update description

    case UPDATE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((task) =>
          task.id === payload.id
            ? { ...task, description: payload.updatedDescription }
            : task
        ),
      }

    default:
      return state
  }
}
