
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


  const handleAddTask = () => {


    if(!input) {return}
   
    const newTask : TaskInterface = {
      id: 1,
      text:input,
      isChecked: false

    }
    setTasks((state) => [...state, newTask])
    setInputValue('')
  };

  return (
    <main>
      <Header>
      </Header>

      <div className={styles.insertContainer}>

        <InsertTaskInput
          onChange={(e) => setInputValue(e.target.value)}
          value={input}
        />
        <InsertTaskButton onClick = {handleAddTask}/>


      </div>

      <TaskListHeader>

      </TaskListHeader>

      {tasks.length > 0 ? (
        <div>
          {tasks.map((task) => (
            <Task data={task}
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
