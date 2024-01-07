import React, { useEffect, useRef, useState } from 'react'
import Header from './components/header/Header'
import TopBody from './components/TopBody/TopBody'
import AbouteSelf from './components/abouteSelf/AbouteSelf'
import LineDecor from './components/lineDecor/LineDecor'
import Title from './components/title/Title'
import Experience from './components/experience/Experience'
import Projects from './components/project/Projects'
import DigitalDesign from './components/digitalDesign/DigitalDesign'
import News from './components/news/News'
import img1 from '../photos/image-1.jpg'
import img2 from '../photos/image2.jpg'
import img3 from '../photos/image3.png'

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


const elem1=useRef(0)
const elem2=useRef(0)
useEffect(()=>{
 window.addEventListener('scroll',(e)=>{

   if(window.scrollY>700){
     elem1.current.className='fade-in container'
   }
    if(window.scrollY>1100){
        elem2.current.className='fade-in container'
    }
    
 })
},[])
  return (
    <>
     <Header />
     <TopBody />
     <AbouteSelf />
     <Title title="Education" btn="true" />
     <LineDecor />
    <div className='flex gap-5 container' ref={elem1}>
     {
      info.map(item=>{return <Experience info={item} key={item.id}/>
      })
    }
      </div>
      <Title title="Experience" btn="false" />
      <LineDecor />
      <div className='flex gap-5 container' ref={elem2}>
     {
      info.map(item=>{return <Experience info={item} key={item.id}  />
      })
    }
      </div>
      <Title title="Experience" btn="false" />
      <Projects />
      <DigitalDesign />
      <Title title="News & Insights" btn="false" />
      <News title="driving engagement online" images={[img1,img2,img3]}/>
    </>
  )
}

export default App
