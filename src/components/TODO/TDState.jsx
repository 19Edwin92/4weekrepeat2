import React from 'react'
import { useConfigTodo } from '../../hooks/useConfigTodo'
import { doneTodo, deleteTodo } from '../../modules/todolists';
import { Ptag } from './TDCss';
import TDEdite from './TDEdite';

function TDState({isDone}) {
  const [todo,dispatch] = useConfigTodo();

  return (
    <div>
      {!isDone ? <p><span>할일목록</span></p> : <p><span>완료목록</span></p>}
      {todo.map(el =>
        el.isDone === isDone && (
          <div key={el.id}>
            <Ptag>{el.title}</Ptag>
            <TDEdite item={el} />
            <button className='btngap' onClick={()=>{dispatch(doneTodo(el.id))}}>완료</button>
            <button onClick={()=>{dispatch(deleteTodo(el.id))}}>삭제</button>
          </div>
        ))}
    </div>
  )
}

export default TDState;