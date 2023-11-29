import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    editTodo(value, task.id)
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value} placeholder='更新你的清單' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>更新吧</button>
    </form>
  )
}
