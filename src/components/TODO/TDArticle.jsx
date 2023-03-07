import React from 'react'
import { TDArticle_Layout } from './TDCss'
import TDState from './TDState'

function TDArticle() {
  return (
    <TDArticle_Layout>
      <TDState isDone={false} />
      <TDState isDone />
    </TDArticle_Layout>
  )
}

export default TDArticle