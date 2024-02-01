import { FiTrash2 } from 'react-icons/fi'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
function Task({ id, name, description }) {
    const { deleteTask } = useContext(TaskContext)
    return (
        <div className='bg-gray-800 text-white rounded-md p-4  '>
            <h1 className='font-bold text-xl capitalize text-wrap'>{name}</h1>
            <p className='text-gray-500 text-sm'>{description}</p>
            <button type="button" className='inline-flex justify-start rounded bg-red-500 px-2 py-1 transition-colors ease-in hover:bg-red-600 hover:text-gray-300 active:bg-red-700 active:text-gray-800 mt-4' onClick={() => deleteTask(id)}><FiTrash2 className='size-5' />&nbsp;&nbsp;Eliminar</button>

        </div>
    ); º
}

export default Task;
Task.propTypes = Object.freeze({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

})