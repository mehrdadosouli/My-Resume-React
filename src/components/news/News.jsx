import React, { useState } from 'react'

export default function News(props) {
  const [img1,img2,img3]=props.images

    const [state1,setState1]=useState(false)
    const [state2,setState2]=useState(false)
    const [state3,setState3]=useState(false)
    const [page,setPage]=useState([])
  return (
    <>
    <div className='container [&>*]:flex [&>*]:flex-col [&>*]:items-start [&>*]:gap-10'>
      <div className='w-[33%] h-[150px] border ltr-dir relative box' onMouseEnter={()=>setState1(true)} onMouseLeave={()=>setState1(false)} onMouseMove={(e)=>setPage([e.nativeEvent.offsetX,e.nativeEvent.offsetY])}>
       <span >BRANDING</span>
        <h2 className='ltr-dir'>{props.title}</h2>
        {state1 && <div><img className='absolute w-48' style={{left:`${page[0]}px`,top:`${page[1]}px`}} src={img1} alt="" /></div>}
      </div>
      <div className='w-[33%] h-[150px] border ltr-dir relative box' onMouseEnter={()=>setState2(true)} onMouseLeave={()=>setState2(false)} onMouseMove={(e)=>setPage([e.nativeEvent.offsetX,e.nativeEvent.offsetY])}>
       <span >BRANDING</span>
        <h2 className='ltr-dir'>{props.title}</h2>
        {state2 && <div><img className='absolute w-48' style={{left:`${page[0]}px`,top:`${page[1]}px`}} src={img2} alt="" /></div>}
      </div>
      <div className='w-[33%] h-[150px] border ltr-dir relative box' onMouseEnter={()=>setState3(true)} onMouseLeave={()=>setState3(false)} onMouseMove={(e)=>setPage([e.nativeEvent.offsetX,e.nativeEvent.offsetY])}>
       <span >BRANDING</span>
        <h2 className='ltr-dir'>{props.title}</h2>
        {state3 && <div><img className='absolute w-48' style={{left:`${page[0]}px`,top:`${page[1]}px`}} src={img3} alt="" /></div>}
      </div>
    </div>
      </>
  )
}
