import React, { useReducer, createContext } from 'react';

const initialState = {
  tasks: [],
  filterTasks: [] ///hay que añadir las tareas correspondientes al filtro 
};

const taskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        filterTasks: [...state.filterTasks, action.payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        filterTasks: state.filterTasks.filter((task) => task.id !== action.payload)
      };
    case 'COMPLETED_TASK':
      const taskActu = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskActu.id) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      })
      const updatedFilterTasks = state.filterTasks.map((task) => {
        if (task.id === taskActu.id) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      })
      return {
        ...state,
        tasks: updatedTasks,
        filterTasks: updatedFilterTasks
      };
    case "SHOW_COMPLETED":
      return {
        ...state,
        filterTasks: state.tasks.filter((task) => task.completed)
      };
    case "SHOW_INCOMPLETED":
      return {
        ...state,
        filterTasks: state.tasks.filter((task) => !task.completed)
      };
    case "SHOW_ALL":
      return {
        ...state,
        filterTasks: [...state.tasks]
      }
    default:
      return {
        state,
        filterTask: [...state.tasks]
      }
  }
};
/*
const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return {
        ...state,
        tasks: [...state.tasks]
      }
    case "SHOW_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.completed)
      }
    case "SHOW_INCOMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed)
      }
    default:
      return state;
  }
}
*/


const TaskProvider = (props) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <taskContext.Provider value={{ state, dispatch }}>
      {props.children}
    </taskContext.Provider>
  )
};

export { taskContext, TaskProvider };

