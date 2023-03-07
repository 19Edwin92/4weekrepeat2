import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import { useEitsubmit } from '../../hooks/useSubmit';
import { Ptag } from './TDCss';

function TDEdite({item}) {
  const [edit, setEdit] = useState(false);
  const [value, setValue, handler] = useInput({
    title:''
  });
  const set = {...value, title:''}
  const [editsubmitTodo] = useEitsubmit({item, value, setValue, setEdit, set});
  const navigate = useNavigate();

  return (
    <>
    {!edit ? (
      <>
      <Ptag style={{cursor:"pointer"}} onClick={()=> {navigate(`/todos/${item.id}`)}}>{item.txt}</Ptag>
      <button onClick={()=> setEdit(pre=> !pre)} >수정하기</button>
      </>)
      : (
      <>
      <form style={{display:"inline"}} onSubmit={editsubmitTodo}>
      <p><input required type="text" name="title" value={value.title} onChange={handler}/></p>  
      <button >수정완료</button>
      </form>
      </>)}
    </>
  )
}

export default TDEdite