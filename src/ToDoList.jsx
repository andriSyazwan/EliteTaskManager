import React, { useState } from 'react';
import { PRIORITY } from './assets/enums';
import './index.css'

function ToDoList(){

    const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
    const [newTask, setNewTask] = useState("");
    const [priority, setNewPriority] = useState()

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function editTask(index) {

    }

    function changePriority(index) {

    }

    return(
    <div className="toDoList">
        <h1>Elite Task Manager</h1>
        <div className="">
            <input
                type="text"
                placeholder="What would you like to do.."
                value={newTask}
                onChange={handleInputChange}
                />
            <button className="addButton"
                onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="deleteButton"
                        onClick={() => deleteTask(index)}>
                            Delete
                    </button>
                    <button
                        className="editButton"
                        onClick={() => editTask(index)}>
                            Edit
                    </button>
                </li>
            )}
        </ol>
    </div>);
}
export default ToDoList