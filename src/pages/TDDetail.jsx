import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useConfigTodo } from '../hooks/useConfigTodo'

function TDDetail() {
  const [todo] = useConfigTodo();
  const prams = useParams();
  const findtodo = todo.find(el => el.id === Number(prams.id))
  const navigate = useNavigate();
  
  //옵셔널체이닝에 대해서 알아보자 
  //24~26번 줄에 있는 아이가 옵셔널체이닝
  useEffect(() => {
    if (findtodo === undefined) {
      alert("아직 DB에 저장되어 있지 않아요 ㅈㅅㅈㅅ");
      navigate("/");
    }
  }, []);

  return (
   <>
    <input type="button" value="돌아가기" onClick={()=>{navigate('/')}}></input>
    <div>
      <p>ID:{prams.id}</p>
      <p>{findtodo?.title}</p>
      <p>{findtodo?.txt}</p>
    </div>
    </>
  )
}

export default TDDetail