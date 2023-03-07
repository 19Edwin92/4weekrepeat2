import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CreateGolbal, Layout, Ptag, TDEditarticle1, TDEditarticle2 } from '../components/TODO/TDCss';
import TDHeader from '../components/TODO/TDHeader';
import { useConfigTodo } from '../hooks/useConfigTodo'

function TDDetail() {
  const [todo] = useConfigTodo();
  const prams = useParams();
  const findtodo = todo.find(el => el.id === Number(prams.id))
  const navigate = useNavigate();
  const date = new Date(findtodo.id);
  const writingYears = date.getFullYear();
  const writingMonths = date.getMonth()+1;
  const writingday = date.getDay();
  
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
   <CreateGolbal/>
   <Layout>
   <TDHeader />
    <TDEditarticle1>
    <button onClick={()=>{navigate('/')}}>돌아가기</button>
    </TDEditarticle1>
    <TDEditarticle2>
      <Ptag>{findtodo?.title}</Ptag>
      <Ptag> 작성일 : {writingYears}년 {writingMonths}월 {writingday}일 <br/><br/> {findtodo?.txt}</Ptag>
      
    </TDEditarticle2>
    </Layout>
    </>
  )
}

export default TDDetail