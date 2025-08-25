import {useState} from 'react'
import './App.css'
import { closestCorners, DndContext } from '@dnd-kit/core'
import Coloum from './components/Coloum.jsx'
import Input from './components/Input.jsx'

function App() {
  const [tasks, setTasks] = useState([
    {id: '1', title: 'Task 1, Going to market' },
    {id: '2', title: 'Task 2, visiting a new mall' },
    {id: '3', title: 'Task 3, going to temple' },
  ])

 const addTask = (title) => {
  setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
};

   const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };


  const handleDragEnd = event => {
    const {active, over} = event
    if(active.id !== over.id){
      setTasks((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)
        const newArray = [...items]
        newArray.splice(oldIndex, 1)
        newArray.splice(newIndex, 0, items[oldIndex])
        return newArray
      })
    }
  }

  return (
    <div className="App">
     <div className="header">
        <h1>DragTodo</h1>
        <h4>My To-do List</h4>
    </div>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input onSubmit={addTask} />
        <Coloum  tasks={tasks}  deleteTask={deleteTask} />
      </DndContext>
    </div>
  )
}

export default App
