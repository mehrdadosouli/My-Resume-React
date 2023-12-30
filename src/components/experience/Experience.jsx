import React, { useEffect, useRef } from 'react'


export default function Experience(props) {
    const {date,title,header,text}=props.info
   
useEffect(()=>{

},[])
  return (
    <>
        <div className='[&>*]:ltr-dir w-[24%] pr-20' >
            <h4 className='font-MorabbaBold'>{date}</h4>
            <h4 className='text-gray-500 text-2xl'>{title}</h4>
            <h3 className='my-5 text-5xl font-MorabbaBold'>{header}</h3>
            <p className='text-2xl'>{text}</p>
        </div>
    </>
  )
}
