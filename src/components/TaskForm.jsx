import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { FiCheck } from 'react-icons/fi'
import { TaskContext } from '../context/TaskContext';
function TaskForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { createTask } = useContext(TaskContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({ name, description })
        setName('')
        setDescription('')
    }
    return (

        <div className='max-w-md mx-auto '>
            
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4 rounded-md'>
                <h1 className='font-semibold text-2xl text-white mb-4'>Cree una tarea</h1>
                <table>
                    <tbody>
                        
                        <tr>
                            <td>
                                <label htmlFor="name" className='text-xl text-white'>Nombre: </label>

                            </td>
                            <td>
                                <input type="text" placeholder='Escriba el nombre de la tarea' maxLength={30} onChange={(e) => {
                                    setName(e.target.value)
                                }} id='name'
                                    value={name}
                                    className='bg-slate-300 p-2 w-full mb-2 rounded-md ml-2 text-xl' />

                            </td>
                           

                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="descripcion" className='text-xl text-white' >Descripción: </label>
                            </td>
                            <td>
                                <textarea className='bg-slate-300 p-2 w-full mb-2  rounded-md ml-2 '  placeholder='Escriba la descripcion de la tarea' id='description' onChange={(e) => setDescription(e.target.value)} value={description}  />
                            </td>
                        </tr>
                    </tbody>
                </table>



                <button type='submit' className='flex align rounded text-base/5  ease-in transition-colors  bg-green-400 p-2 hover:bg-green-600 hover:text-gray-700  active:bg-green-800 active:text-white
                ' ><FiCheck className='scale-125 '/>&nbsp;&nbsp;Guardar</button>



            </form>
        </div>

    );

}


export default TaskForm;
