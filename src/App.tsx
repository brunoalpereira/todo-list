
import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import './App.css'
import { EmptyTaskCard } from './components/EmptyTaskCard'
import Task from './components/Task'
import TaskListHeader from './components/TaskListHeader'
import InsertTaskInput from './components/InsertTaskInput'
import InsertTaskButton from './components/InsertTaskButton'

export interface Task {
  id: number
  text: string
  isChecked: boolean
}
function App() {



  const [tasks, setTasks] = useState<Task[]>([])
  const handleAddTask = () => {
   
  };

  return (
    <main>
      <Header>
      </Header>

      <div className={styles.insertContainer}>

        <InsertTaskInput>
        </InsertTaskInput>
        <InsertTaskButton >

        </InsertTaskButton>

      </div>

      <TaskListHeader>

      </TaskListHeader>

      {tasks.length > 0 ? (
        <div>
          {tasks.map((task) => (
            <Task

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
