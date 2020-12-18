import React from 'react'

export default function Task({ task, deleteTask }) {
    return (
        <div className='task'>
            <span className='label'>{task.category} </span> 
            <span className='text'>{task.text}</span>
            <button className='delete' onClick={()=>deleteTask(task)}>X</button>
        </div>
    )
}
