import React, { useState } from 'react';
import { PRIORITY } from './assets/enums';
import './index.css';
import { useLocalStorage } from './hooks/localstorage';

function ToDoList(){
    const localStorageKey = "tasks";
    const todayDate = new Date();
    const defaultTask = {status: false,
                        title: "Let's get started",
                        description: "",
                        date: todayDate,
                        priority: PRIORITY.LOW};
    const [tasks, setTasks] = useLocalStorage(localStorageKey, [defaultTask]);
    const [newTask, setNewTask] = useState({status: false,
        title: "",
        description: "",
        date: todayDate,
        priority: PRIORITY.LOW});
    const [newTaskForm, setNewTaskForm] = useState(false);

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState(false);
    const [description, setDiscription] = useState("");
    const [priority, setNewPriority] = useState(PRIORITY.LOW);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(title.trim() !== "") {
            setTasks(t => [...tasks, newTask]);
            setNewTask({status: false,
                title: "",
                description: "",
                date: todayDate,
                priority: PRIORITY.LOW});
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function editTask(index) {

    }

    function completeTask(index) {

    }

    function changePriority(index) {

    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function openNewTask() {
        setNewTaskForm(true);
    }

    function closeTaskForm() {
        setNewTaskForm(false);
    }

    return(
    <div className="toDoList">
        <h1>Elite Task Manager</h1>
        <div className="animetedButtonDiv">
            <button className="icon-btn add-btn" onClick={openNewTask}>
                <div className="add-icon"></div>
                <div className="btn-txt">Add Task</div>
            </button>
        </div>
        <div>
        {newTaskForm && (
            <div className="taskForm">
                <input
                    type="text"
                    placeholder="What would you like to do.."
                    value={title}
                    onChange={handleInputChange}
                    />
                <button className="addButton"
                    onClick={addTask}>
                    Add
                </button>
                <button className="cancelButton"
                    onClick={closeTaskForm}>
                    Cancel
                </button>
            </div>
        )}
        </div>
        
        <div className="overdueSection">
            <div>
                <h2>
                    Overdue
                </h2>
            </div>
            <div>

            </div>

        </div>

        <div className="upcomingSection">
            <div>
                <h2>
                    Upcoming
                </h2>
            </div>
            <div>

            </div>
        </div>

        <div className="completedSection">
            <div>
                <h2>
                    Completed
                </h2>
            </div>
            <div>

            </div>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task.title}</span>
                    <span className="description">{task.description.length > 20 ? task.description.substring(0, 20) + "..." : task.description}</span>
                    <span className="date">{task.date.substring(0,10)}</span>
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