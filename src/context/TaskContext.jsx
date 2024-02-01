import { createContext, useState, useEffect } from "react";

import data from '../data/tasks.json'
export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks(data)
    }, []);
    function createTask({ name, description }) {
        setTasks([...tasks, {
            id: tasks.length + 1,
            name,
            description

        }])
    }
    function deleteTask(id) {
        setTimeout(() => setTasks(tasks.filter(t => t.id !== id)),100)
    }
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );

}


