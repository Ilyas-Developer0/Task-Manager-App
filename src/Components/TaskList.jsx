import React from 'react'

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="no-tasks">No tasks yet. Add Any Task Please!</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span className="task-text">{task.text}</span>
          <div className="task-actions">
            <button className="btn btn-complete" onClick={() => onToggleComplete(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="btn btn-delete" onClick={() => onDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
