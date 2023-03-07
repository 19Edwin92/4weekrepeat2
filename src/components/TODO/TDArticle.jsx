import React from 'react'
import TDState from './TDState'

function TDArticle() {
  return (
    <>
    <TDState isDone={false}/>
    <TDState isDone/>
    </>
  )
}

export default TDArticle