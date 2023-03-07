import React from 'react'
import { useConfigTodo } from '../../hooks/useConfigTodo'

function TDState({isDone}) {
  const [todo] = useConfigTodo();

  return (
    <>
      {!isDone ? <p>할일목록</p> : <p>완료목록</p>}
      {todo.map(el =>
        el.isDone === isDone && (
          <div key={el.id}>
            <p>{el.title}</p>
            <p>{el.txt}</p>
          </div>
        ))}

    </>
  )
}

export default TDState