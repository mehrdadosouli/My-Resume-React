import React from 'react'
import Header from './components/header/Header'
import TopBody from './components/TopBody/TopBody'
import AbouteSelf from './components/abouteSelf/AbouteSelf'
import Title from './components/title/Title'


function App() {

  return (
    <>
     <Header />
     <TopBody />
     <AbouteSelf />
     <Title title="Education" btn="true" />

    </>
  )
}

export default App
