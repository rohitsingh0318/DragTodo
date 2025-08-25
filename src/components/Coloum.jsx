import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Task from './Task'

const Coloum = ({ tasks, deleteTask }) => {   // 👈 yaha receive karo
  return (
    <div className='coloum'>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task 
            id={task.id} 
            title={task.title} 
            key={task.id} 
            deleteTask={deleteTask}   // 👈 Task.jsx ko pass karo
          />
        ))}
      </SortableContext>
    </div>
  )
}

export default Coloum
