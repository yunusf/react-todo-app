import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos }) => {
  return (
    <div>
      <h1>This is Todos component</h1>
      {
        todos.map((todo) => {
          // load data di todos.js
          {/* return <p key={todo.id}>{ todo.title }</p> */ }

          // Berikan datanya ke TodoItem | data di load di todoitem.js
          return <TodoItem key={todo.id} todo={todo} />
        })
      }
    </div>
  )
}

export default Todos