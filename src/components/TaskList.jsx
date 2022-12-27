import {TaskCard} from "./TaskCard.jsx";
import { TaskContext } from "../context/TaskContext.jsx";
import { useContext } from "react";

export const TaskList = () => {

    const {tasks, deleteTask } = useContext(TaskContext)

    if(tasks.length === 0){
        return (
            <>
                <h1 className={'text-white text-4xl text-center font-bold'}>Aun no hay tareas creadas</h1>
            </>
        )
    }

    return (
        <div className={'grid grid-cols-4 gap-2'}>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
}