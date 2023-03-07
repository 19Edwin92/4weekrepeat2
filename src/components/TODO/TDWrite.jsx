import React from 'react'
import { useConfigTodo, useIsDone } from '../../hooks/useConfigTodo'
import { useInput } from '../../hooks/useInput'
import { useSubmit } from '../../hooks/useSubmit'
import { TDW_Layout } from './TDCss'

function TDWrite() {
  const [value, setValue, handler] = useInput({title:'',txt:'',})
  const [todo] = useConfigTodo();
  const set = {...value, title:'', txt:''}
  const [submitTodo] = useSubmit({value, setValue, set});
  const [isDoneF, isDoneT] = useIsDone();

  return (
    <TDW_Layout>
      <div>
        <form onSubmit={submitTodo}>
          <p>제목 : <input required type="text" name="title" value={value.title} onChange={handler} /></p>
          <p>내용 : <input required type="text" name="txt" value={value.txt} onChange={handler} /></p>
          <p><button onSubmit={submitTodo}>제출하기</button></p>
        </form>
      </div>
      <div>
        <p>해야할 일 : {isDoneF.length}개</p>
        <p>완료한 일 : {isDoneT.length}개</p>
      </div>
    </TDW_Layout>
  )
}

export default TDWrite;