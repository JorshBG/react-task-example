import {createContext, useEffect, useState} from "react";
import {tasks as data} from "../data/tasks.js";

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    },[]);

    function createTask(taskTitle, taskDescription) {
        let newTasks = [...tasks,{
            id: tasks.length+1,
            title: taskTitle,
            description: taskDescription
        }]
        setTasks(newTasks)
    }

    function deleteTask({id}) {
        setTasks(tasks.filter(t => t.id !== id))
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}