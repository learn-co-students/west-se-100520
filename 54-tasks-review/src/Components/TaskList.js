import React from 'react'
import Task from './Task'
import Form from './Form'

export default function TaskList({ tasks, selectedCategory, deleteTask, addTask }) {

    const filteredTasks = () => {
        if (selectedCategory === "All") {
            return tasks
        } else {
            return tasks.filter(task => task.category === selectedCategory)
        }
    }

    const renderTasks = () => {
        return filteredTasks().map(task => 
            <Task 
                key={task.text + task.category}
                task={task} 
                deleteTask={deleteTask} 
            />)
    }
    return (
        <div className='tasks'>
            <h5>Tasks</h5>
            <Form addTask={addTask}/>
            {renderTasks()}
        </div>
    )
}
