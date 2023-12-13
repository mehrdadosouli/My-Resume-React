import React, { useState } from 'react'
import Header from './components/header/Header'
import TopBody from './components/TopBody/TopBody'
import AbouteSelf from './components/abouteSelf/AbouteSelf'
import LineDecor from './components/lineDecor/LineDecor'
import Title from './components/title/Title'
import Experience from './components/experience/Experience'
import Projects from './components/project/Projects'


function App() {
const [info,setInfo]=useState([{
  date:'2019-Current',
  title:'Web Courses Skillbox',
  header:'Art-Director',
  text:'Fusce turpis libero, mollis et dui vel, lacinia ultrices dolor',
  id:1
},
{
  date:'2018',
  title:'Web Courses Skillbox',
  header:'Art-Paint',
  text:'Fusce turpis libero, mollis et dui vel, lacinia ultrices dolor',
  id:3
},
{
  date:'2019-Current',
  title:'Web Courses Skillbox',
  header:'Art-Design',
  text:'Fusce turpis libero, mollis et dui vel, lacinia ultrices dolor',
  id:2
},
{
  date:'2013-2017',
  title:'University of Design',
  header:'Art-Actor',
  text:'Fusce turpis libero, mollis et dui vel, lacinia ultrices dolor',
  id:4
}])
  return (
    <>
     <Header />
     <TopBody />
     <AbouteSelf />
     <Title title="Education" btn="true" />
     <LineDecor />
    <div className='flex justify-end gap-5 container'>
     {
      info.map(item=>{return <Experience info={item} key={item.id}/>
      })
    }
      </div>
      <Title title="Experience" btn="false" />
      <LineDecor />
      <div className='flex justify-end gap-5 container'>
     {
      info.map(item=>{return <Experience info={item} key={item.id}/>
      })
    }
      </div>
      <Title title="Experience" btn="false" />
      <Projects />
    </>
  )
}

export default App
