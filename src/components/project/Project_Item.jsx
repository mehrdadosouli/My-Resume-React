import React from 'react'

export default function Project_Item(props) {
  return (<div className='flex gap-10 flex-wrap container relative h-[877px] mt-10'>
      {props.info.map(elem=>{return <div style={{position:'absolute',top:`${elem.top}rem`,right:`${elem.right}rem`}} key={elem.id}>
        <img src={elem.src} style={{width:`${elem.w}px`,height:`${elem.h}px`,borderRadius:'5px'}} alt="" />
           <h1>{elem.name}</h1>
        </div>
        }) 
      }
      </div>
  )
}
