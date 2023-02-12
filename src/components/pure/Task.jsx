import React, { useContext, useState } from 'react';
import { taskContext } from '../../reducer.jsx';

const Task = () => {
  const { state, dispatch } = useContext(taskContext);
  // const { filterState, filterDispatch } = useContext(taskContext);

  /* 
  const handleDeleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const completed = (task) => {
    dispatch({ type: "COMPLETED_TASK", payload: task })
  }

  const showCompleted = () => {
    dispatch({ type: "SHOW_COMPLETED" })
    console.log("Show completed")
  }

  const showInCompleted = () => {
    dispatch({ type: "SHOW_INCOMPLETED" })
    console.log("sow incompleted")
  }
  const showALL = () => {
    dispatch({ type: "SHOW_ALL" })
  }
  */
  const [msj, setMsj] = useState("");
  const handleDeleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const completed = (task) => {
    dispatch({ type: "COMPLETED_TASK", payload: task })
  }

  const showCompleted = () => {
    const completedTasks = state.tasks.filter(task => task.completed);
    if (completedTasks.length > 0) {
      dispatch({ type: "SHOW_COMPLETED" });
      console.log("Show completed");
      setMsj(completedTasks.length + "tareas completdas")
    } else {

      setMsj("No hay tareas completadas")
    }
  };

  const showInCompleted = () => {
    const incompleted = state.tasks.filter(task => !task.completed);
    dispatch({ type: "SHOW_INCOMPLETED" })
    console.log("sow incompleted")
    setMsj(incompleted.length + "tareas incompletas");
  }
  const showALL = () => {
    dispatch({ type: "SHOW_ALL" })
    setMsj("Todas las tareas")
  }

  function renderizarBtn() {
    if (state.filterTasks.length >= 1) {
      return <div className='div-btns'>
        <button className='btn-completed' onClick={() => showCompleted()}> Show completed </button>
        <button className='btn-incompleted' onClick={() => showInCompleted()} > Show incompleted </button>
        <button className='btn-all'  onClick={() => showALL()} > Show all </button>
      </div>
    } else {
      return <h1> No hay tareas aun </h1>
    }
  }

  return (
    <div>
    <table className='tabla'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state.filterTasks.map((task) => (
          <tr key={task.id} className={task.completed ? "taskCompleted" : ""}>
            <td>{task.tittle}</td>
            <td>{task.description}</td>
            <td>
              <button className='btn-red' onClick={() => handleDeleteTask(task.id)}>Delete</button>
              <button className='btn-green' onClick={() => completed(task)}> Completar tarea </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h1>{msj} </h1>
    {renderizarBtn()}
  </div>

  );
};

export default Task
