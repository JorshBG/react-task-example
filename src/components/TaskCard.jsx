import {TaskContext} from "../context/TaskContext.jsx"
import { useContext } from 'react';
export const TaskCard = ({task}) => {

    const {deleteTask} = useContext(TaskContext);

    const handleClick = (e) => {
        deleteTask(task);
    }

    return (
            <div className={'bg-gray-800 text-white p-4 rounded-md'}>
                <h1 className={'text-x1 font-bold capitalize'}>{task.title}</h1>
                <p className={'text-gray-500 text-sm'}>{task.description}</p>
                <button
                    onClick={handleClick}
                    className={'bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-800'}>Delete</button>
            </div>
    );
}