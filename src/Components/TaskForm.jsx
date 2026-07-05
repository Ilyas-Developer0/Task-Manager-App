import React from 'react'

const TaskForm = ({ taskText, setTaskText, onAddTask }) => {
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            onAddTask()
        }
    }

  return (
    <div className="task-form">
        <input
            className="task-input"
            type="text"
            placeholder='Add your task here...'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <button className="btn btn-add" onClick={onAddTask}>Add Task</button>
    </div>
  )
}

export default TaskForm
