
import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import './App.css'
import { EmptyTaskCard } from './components/EmptyTaskCard'
import Task from './components/Task'
import TaskListHeader from './components/TaskListHeader'
import InsertTaskInput from './components/InsertTaskInput'
import InsertTaskButton from './components/InsertTaskButton'

export interface TaskInterface {
  id: number
  text: string
  isChecked: boolean
}
function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([])
  const [input, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  const handleAddTask = () => {
    if (!input) { return }

    const newTask: TaskInterface = {
      id: new Date().getTime(),
      text: input,
      isChecked: false
    }
    setTasks((state) => [...state, newTask])
    setInputValue('')
  };

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }
    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return { ...task }
    })
    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header>
      </Header>
      <div className={styles.insertContainer}>
        <InsertTaskInput
          onChange={(e) => setInputValue(e.target.value)}
          value={input}
        />
        <InsertTaskButton onClick={handleAddTask} />
      </div>
      <TaskListHeader
        totalTasks={tasks.length}
        totalCheckedTasks={checkedTasksCounter}
      />
      {tasks.length > 0 ? (
        <div>
          {tasks.map((task) => (
            <Task
              key={task.id}
              data={task}
              removeTask={handleRemoveTask}
              toggleTaskStatus={handleToggleTask}
            />
          ))}
        </div>
      ) : (
        <EmptyTaskCard />
      )}
    </main>
  )
}

export default App
