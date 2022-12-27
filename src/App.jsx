import {TaskList} from "./components/TaskList.jsx";
import {TaskForm} from './components/TaskForm.jsx'
import {useEffect, useState} from "react";
import {tasks as data} from "./data/tasks.js";
function App() {
    return <main className={'bg-zinc-900 h-screen'}>
        <div className={'container mx-auto p-10'}>
            <TaskForm/>
            <TaskList/>
        </div>
    </main>
}

export default App