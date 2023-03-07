import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useConfigTodo } from '../hooks/useConfigTodo'

function TDDetail() {
  const [todo] = useConfigTodo();
  const prams = useParams();
  console.log(prams.id)
  const findtodo = todo.find(el => el.id === Number(prams.id))
  const navigate = useNavigate();

  return (
   <>
    <input type="button" value="돌아가기" onClick={()=>{navigate('/')}}></input>
    <div>
      <p>{findtodo.title}</p>
      <p>{findtodo.txt}</p>
    </div>
    </>
  )
}

export default TDDetail