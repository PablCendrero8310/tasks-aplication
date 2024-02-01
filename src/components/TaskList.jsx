
import Task from './Task';
import {TaskContext} from '../context/TaskContext' 
import { useContext } from 'react';
const TaskList = () => {
   const {tasks} = useContext(TaskContext)

    if (tasks.length === 0)
        return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aún</h1>

    
    return (

        <div className=' grid grid-cols-4 gap-2 p-4 rounded-md '>
            {
                tasks.map(( {id, name, description, done}) => {
                    return <Task key={id} id={id} name={name} description={description} done={done}/>
                })
            }
        </div>
    );
}

export default TaskList