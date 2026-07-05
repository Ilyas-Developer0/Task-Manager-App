import React, { useState, useEffect } from 'react'
import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'
import './index.css'
const App = () => {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem('tasks')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  function handleAddtask(){
    const text = taskText.trim()
    if (!text) return
    setTasks(prev => [...prev, { text, completed: false }])
    setTaskText('') 
  }

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } catch (e) {
    }
  }, [tasks])

  function handleToggleComplete(index) {
    setTasks(prev => prev.map((t, i) => i === index ? { ...t, completed: !t.completed } : t))
  }

  function handleDelete(index) {
    setTasks(prev => prev.filter((t, i) => i !== index))
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>My Task Manager</h1>
      </header>

      <main className="content">
        <TaskForm
          taskText={taskText}
          setTaskText={setTaskText}
          onAddTask={handleAddtask}
        />
        <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App
