import React from 'react'
import TDArticle from '../components/TODO/TDArticle'
import { CreateGolbal, Layout } from '../components/TODO/TDCss'
import TDHeader from '../components/TODO/TDHeader'
import TDWrite from '../components/TODO/TDWrite'

function TDMain() {
  return (
    <>
      <CreateGolbal />
      <Layout>
        <TDHeader />
        <TDWrite />
        <TDArticle />
      </Layout>
    </>
  )
}

export default TDMain