import React from 'react'
import TDArticle from '../components/TODO/TDArticle'
import { CreateGolbal } from '../components/TODO/TDCss'
import TDWrite from '../components/TODO/TDWrite'

function TDMain() {
  return (
    <>
    <CreateGolbal />
    <header>헤더</header>
    <TDWrite />
    <TDArticle />
    </>
  )
}

export default TDMain