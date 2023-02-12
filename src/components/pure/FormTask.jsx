import React, { useContext } from 'react';
import { taskContext } from '../../reducer.jsx';
let ide = 1;

const TaskForm = () => {

    const { state, dispatch } = useContext(taskContext);


    const handleSubmit = e => {


        e.preventDefault();
        dispatch({
            type: 'ADD_TASK', payload: {
                id: ide++,
                tittle: e.target.elements.task.value,
                description: e.target.elements.description.value,
                completed: false

            }
        });
        console.log(state.tasks)
    };

    return (
        <div className='form'>
            <h1>Añade una tarea </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="task"
                        placeholder="Add a task"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="description"
                        placeholder="Add a description"
                    />

                </div>

                <div>
                    <button type='submit'>Add Task</button>
                </div>
            </form>

        </div>

    );
};

export default TaskForm;
