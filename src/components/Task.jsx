import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Task = ({ id, title, deleteTask }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div className='task' ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <input type="checkbox" className='checkbox' />
      {title}
      <button 
        className='delete'  
        onClick={() => deleteTask(id)}   
      >
        delete
      </button>
    </div>
  )
}

export default Task
