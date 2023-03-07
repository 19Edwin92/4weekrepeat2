import React, { useState } from 'react'
import { useConfigTodo } from '../../hooks/useConfigTodo';
import { useInput } from '../../hooks/useInput';
import { useEitsubmit } from '../../hooks/useSubmit';
import { editTodo } from '../../modules/todolists';

function TDEdite({item}) {
  const [edit, setEdit] = useState(false);
  const [todo, dispatch] = useConfigTodo();
  const [value, setValue, handler] = useInput({
    title:''
  });
  const set = {...value, title:''}
  const [editsubmitTodo] = useEitsubmit({item, value, setValue, setEdit, set});

  return (
    <>
    {!edit ? (
      <>
      <p>{item.txt}</p>
      <button onClick={()=> setEdit(pre=> !pre)} >수정하기</button>
      </>)
      : (
      <>
      <form style={{display:"inline"}} onSubmit={editsubmitTodo}>
      <p><input type="text" name="title" value={value.title} onChange={handler}/></p>  
      <button >수정완료</button>
      </form>
      </>)}
    </>
  )
}

export default TDEdite