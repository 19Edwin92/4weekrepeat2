import React from 'react'
import { useConfigTodo } from '../../hooks/useConfigTodo'
import { doneTodo, deleteTodo } from '../../modules/todolists';
import TDEdite from './TDEdite';

function TDState({isDone}) {
  const [todo,dispatch] = useConfigTodo();

  return (
    <>
      {!isDone ? <p>할일목록</p> : <p>완료목록</p>}
      {todo.map(el =>
        el.isDone === isDone && (
          <div key={el.id}>
            <p>{el.title}</p>
            <TDEdite item={el} />
            <button onClick={()=>{dispatch(doneTodo(el.id))}}>완료</button>
            <button onClick={()=>{dispatch(deleteTodo(el.id))}}>삭제</button>
          </div>
        ))}

    </>
  )
}

export default TDState;