import {useState, useContext} from "react";
import { TaskContext} from "../context/TaskContext.jsx";

export const TaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <div className={'max-w-md mx-auto'}>
            <form onSubmit={handleSubmit} className={'bg-slate-900 p-10 mb-4 rounded-md'}>
                <h1 className={'text-white text-xl font-bold mb-3'}>Create your task</h1>
                <input
                    type="text"
                    placeholder={'Write the task'}
                    onChange={(e) =>
                    setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    className={'bg-slate-300 rounded-md w-full mb-2 p-3'}
                />
                <textarea
                    name="description"
                    id="desc1"
                    cols="30"
                    rows="3"
                    placeholder={'Write a description'}
                    onChange={(e) => {
                              setDescription(e.target.value)
                    }}
                    value={description}
                    className={'bg-slate-300 rounded-md w-full mb-2 p-3'}
                ></textarea>
                <button
                    className={'bg-indigo-500 px-3 py-1 rounded-md mt-4 hover:bg-red-800 mx-auto text-white'}
                >Enviar</button>
            </form>
        </div>
    );
}