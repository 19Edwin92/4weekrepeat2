import React from 'react'
import { useInput } from '../../hooks/useInput'
import { useSubmit } from '../../hooks/useSubmit'

function TDWrite() {
  const [value, setValue, handler] = useInput({
    title:'',
    txt:'',
  })

  const set = {...value, title:'', txt:''}
  const [submitTodo] = useSubmit({value, setValue, set});


  return (
    <form onSubmit={submitTodo}>
      <input type="text" name="title" value={value.title} onChange={handler}/>
      <input type="text" name="txt" value={value.txt} onChange={handler}/>
      <input type="submit"/>
    </form>
  )
}

export default TDWrite;